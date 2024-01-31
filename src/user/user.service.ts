/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/input/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from 'src/input/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>
    ){}
    // private users:User[]=[]
    // signup (){return {msg:"I g=have sign up" }    }
    // signin (){return {msg:"I g=have sign in" }}
    // findAll():Promise<User[]>{
    //     return this.userRepository.find()
    // }
    findUsers(){
       return this.userRepository.find()
    }

    createUser(createUserDto:CreateUserDto):Promise<User>{
     const newUser=this.userRepository.create(createUserDto)
      return this.userRepository.save(newUser)
    }

    updateUser(id:number,updateUserDto:UpdateUserDto){
        return this.userRepository.update({id},{...updateUserDto})
    }

    deleteUser(id:number){
        return this.userRepository.delete({id})
    }
}

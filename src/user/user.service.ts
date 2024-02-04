/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from 'src/input/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from 'src/input/update-user.dto';

@Injectable()
export class UserService {    
    private readonly logger=new Logger(UserService.name)
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User> 
    ){}

    findUsers(){
       return this.userRepository.find()
    }
    findOne(id:number):Promise<User>{
        return this.userRepository.findOne({
            where:{id:id}
        })
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
/* eslint-disable prettier/prettier */
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from './user.schema';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from '../input/create-user.dto';

@Resolver(()=> User)
export class UserResolver {
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>
    ){}
    
    @Query(()=>[User])
public async users():Promise<User[]>{
    return await this.userRepository.find()
}
@Query((returns)=> User,{nullable: true}) 
getUserById(@Args('id',{type:()=>Int})id:number){
    return  this.userRepository.findOne({
        where:{id:id }   
    })
}
@Mutation(()=>User,{name:'createUser',nullable:true})
public async createUser(
    @Args('createUserDto')
    createUserDto:CreateUserDto):Promise<User>{
    const newUser=this.userRepository.create(createUserDto)
    return await this.userRepository.save( newUser)
}

}
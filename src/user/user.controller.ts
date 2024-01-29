/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/input/create-user.dto';
import { UpdateUserDto } from './../input/update-user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor (
        private readonly userService:UserService
    ){}

    private users:User[]=[]
  @Get()
  findAll(){
      return this.users
}

@Get(':id')
findOne(@Param('id')  id ){
    return this.users.find((user)=> user.id=== parseInt(id))
    }
    
    @Post()
    create(@Body() createUserDto:CreateUserDto){
        const users={
            ...createUserDto,
            batch:new Date(createUserDto.batch),
            id:this.users.length+1
        }
        this.users.push(users)
        return users
    }

    @Patch(':id')
    update(@Param('id') id,@Body() updateUserDto:UpdateUserDto){
        const update=this.users.findIndex(user=>user.id===parseInt(id))
        this.users[update]={
            ...this.users[update],
            ...updateUserDto,
        }
        return this.users[update]
    }
    
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id ){
        this.users=this.users.filter(user=>user.id!==parseInt(id))
    }
  @Post('signup')
    sighup() {
        return this.userService.signup
    }
    @Post('signin')
    sighin() {
        return this.userService.signin
    }
}

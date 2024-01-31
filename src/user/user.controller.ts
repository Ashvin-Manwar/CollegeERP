/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/input/create-user.dto';
import { UpdateUserDto } from 'src/input/update-user.dto';

@Controller('user')
export class UserController {
    constructor (
        private readonly userService:UserService,
    ){}

    @Get()
    async getUsers(){
        const users=await this.userService.findUsers()
    return users
}

    @Get(':id')
    async findOne(@Param('id') id){
        return await this.userService.findOne(id)
    }
    
    @Post()
    async create(@Body() createUserDto:CreateUserDto){
        return await this.userService.createUser(createUserDto)
    }

    @Patch(':id')
    async  updateUserById(
      @Param('id',ParseIntPipe) id:number,
      @Body() updateUserDto:UpdateUserDto){
        await this.userService.updateUser(id,updateUserDto)
    }

    @Delete(':id')
    async deleteUserById(
        @Param('id',ParseIntPipe) id:number
    ){
        await this.userService.deleteUser(id)
    }    

    @Post('profiles')
    createUserProfile(){

    }
}
// private users:User[]=[]
//   @Get()
//   findAll(){  return this.users}
// @Get(':id')
// findOne(@Param('id')  id ){
//     return this.users.find((user)=> user.id=== parseInt(id))
//     }

// @Patch(':id')
// update(@Param('id') id,@Body() updateUserDto:UpdateUserDto){
            //     const update=this.users.findIndex(user=>user.id===parseInt(id))
        //     this.users[update]={
        //         ...this.users[update],
        //         ...updateUserDto,
        //     }
        //     return this.users[update]
        // }
      //   @Post('signup')
     // sighup() {return this.userService.signup }
// @Post('signin')
// sighin() {return this.userService.signin }
// @HttpCode(204)
// remove(@Param('id') id){this.users=this.users.filter(user=>user.id!==parseInt(id))}
// @Delete(':id')
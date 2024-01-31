/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsNumber, Length, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(5)
    username:string
    
    @IsNotEmpty()
    @MinLength(10)
    password:string
    
    @IsNotEmpty()
    @IsEmail()
    email:string
    @Length(6,255)
    name:string
    @IsNumber()
    phonenumber:number
    department:string
}

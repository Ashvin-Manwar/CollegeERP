/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class UserProfileDto {
    @IsNotEmpty()
    firstname:string
    @IsNotEmpty()
    lastname:string
    @IsNumber()
    age:number
    @IsNotEmpty()
    @IsDate()
    dob:string
}
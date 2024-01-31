import { IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class UserProfileDto {
    @IsNotEmpty()
    firstname:string
    @IsNotEmpty()
    lastname:string
    @IsNumber()
    age:number
    @IsNotEmpty()
    dob:string
}
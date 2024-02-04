/* eslint-disable prettier/prettier */
import { EnumOptions, Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, MinLength } from "class-validator";
import { Branch } from "src/enum/branches.enum";
import { UserGender } from "src/enum/gender.enum";
import { UserRole } from "src/enum/userRole.enum";

@InputType()
export class CreateUserDto {
  @Field()
  @IsNotEmpty()
  @MinLength(5)
  firstname:string

  @Field()
  @IsNotEmpty()
    @MinLength(5)
    lastname:string   

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @Field(()=>String)
    @IsPhoneNumber()
    phonenumber:string

    @Field()
    @IsNotEmpty()
    @IsOptional()
    @IsEnum(UserGender)
    gender:UserGender
    
    @Field()
    @IsNotEmpty()
    @IsOptional()
    @IsEnum(Branch)
    department:Branch
    @Field()
    @IsNotEmpty()
    @IsOptional()
  @IsEnum(UserRole)
    role:UserRole

}

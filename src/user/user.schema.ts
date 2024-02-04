/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../enum/userRole.enum";
import { Branch } from "src/enum/branches.enum";
import { UserGender } from "src/enum/gender.enum";

@ObjectType()
@Entity()
export class User{
   @Field(()=> Int)
   @PrimaryGeneratedColumn(
   {type:'bigint',name:'user_id'})
   id:number
   
   @Field()
   @Column({nullable:false,default:''})
   firstname:string
   
   @Field()
   @Column({nullable:false, default:''})
   lastname:string
  
   @Field()
   @Column({name:'email_address',unique:true,nullable:false,default:''})
   email:string

   @Field()
   @Column({name:'phone_number'})
   phonenumber:string
 
   @Field()
    @Column({ type:'enum',enum:UserGender})
    gender:string
  
    @Field()
     @Column({type:"enum",
     enum:Branch,
     default:Branch.MECHANICAL,
     })
     department:string

     @Field()
      @Column({type: "enum", enum: UserRole, default: UserRole.STUDENT,})
   role: UserRole
       


}
/* eslint-disable prettier/prettier */
import { Profile } from "src/profile/profile.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
   @PrimaryGeneratedColumn(
   {type:'bigint',name:'user_id'})
   id:number
   
   @Column({
      nullable:false,default:''})
   username:string
   
   @Column({nullable:false,
   default:''
   })
   password:string

@Column({
   name:'email_address',
   unique:true,
   nullable:false,default:''})
   email:string
   
   @Column({nullable:false,
      default:''   
   })
   name:string
   @Column({})
   phonenumber:number
   @Column({
      default:''
   })
   department:string

   @OneToOne(()=>Profile)
   @JoinColumn()
   profile:Profile


}
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    signup (){
        return {
            msg:"I g=have sign up"
        }
    }
    signin (){
        return {
            msg:"I g=have sign in"
        }
    }
}

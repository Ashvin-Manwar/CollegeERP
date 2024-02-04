/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';e';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.schema';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory:()=>({
        secret:process.env.AUTH_SECRET,
        signOptions:{
            expiresIn:'60m'
        }
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthResolver],
  exports:[AuthService],
})
export class AuthModule {}

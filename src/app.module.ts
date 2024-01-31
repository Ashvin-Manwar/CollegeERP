/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Profile } from './profile/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'College_EPR',
      entities: [User,Profile],
      synchronize: true,
      
    }),
//     ConfigModule.forRoot({ isGlobal:true,load:[ormConfig],expandVariables:true,
//       envFilePath:`${process.env.NODE_ENV ?? ''}.env` }),
//     TypeOrmModule.forRootAsync({
//       useFactory:process.env.NODE_ENV !== 'production'? ormConfig:ormConfigProd
// }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

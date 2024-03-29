/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import ormConfig from './config/orm.config';
// import ormConfigProd from './config/orm.config.prod';

@Module({
  imports: [
//     ConfigModule.forRoot({
//       isGlobal:true,
//       load:[ormConfig],
//       expandVariables:true,
//       envFilePath:`${process.env.NODE_ENV ?? ''}.env`      
//     }),
//     TypeOrmModule.forRootAsync({
//       useFactory:process.env.NODE_ENV !== 'production'? ormConfig:ormConfigProd
  
// }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

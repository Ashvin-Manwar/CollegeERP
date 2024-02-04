/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config.prod';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[ormConfig],
      expandVariables:true,
      // envFilePath:'.env'
    }),
    TypeOrmModule.forRootAsync({
       useFactory:process.env.NODE_ENV !== 'production'? ormConfig:ormConfigProd
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:'src/schema.gql',
      playground:true
    }),     //  envFilePath:`${process.env.NODE_ENV ?? ''}.env` }),
  UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService
  ],
})
export class AppModule {}

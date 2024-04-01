import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { SupportRequest } from './modules/supportRequests/supportRequest.entity';
import { SignupEvent } from './modules/signupEvents/signupEvent.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([SupportRequest, SignupEvent]),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
})
export class AppModule {}

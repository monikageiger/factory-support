import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { SupportRequest } from './modules/supportRequests/supportRequest.entity';
import { SignupEvent } from './modules/signupEvents/signupEvent.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException, BadRequestException } from '@nestjs/common';
@Controller()
export class AppController {
  constructor(
    @InjectRepository(SupportRequest)
    private supportRequestRepository: Repository<SupportRequest>,
    @InjectRepository(SignupEvent)
    private signupEventRepository: Repository<SignupEvent>,
  ) {}

  @Get('/support-requests')
  async getSupportRequests(@Query('type') type: string) {
    const userId = '12345abc';
    const supportRequests = await this.supportRequestRepository.find(
      type ? {} : {},
    );
    const signUpEvent = await this.signupEventRepository.find({
      where: { userId },
    });

    return supportRequests.map((request) => {
      return {
        ...request,
        isUserSignedUp: !!signUpEvent.find(
          (event) =>
            event.userId === userId && event.supportRequest.id === request.id,
        ),
      };
    });
  }

  @Post('/support-request/create')
  @HttpCode(201)
  createTask(@Body() requestData: SupportRequest) {
    return this.supportRequestRepository.save(requestData);
  }

  @Get('/signup-events')
  async getSignupEvents(@Query('type') type: string) {
    return await this.signupEventRepository.find(type ? {} : {});
  }

  @Post('/signup-event/create')
  @HttpCode(201)
  async createSignupEvent(@Body() signupEventData: any) {
    const supportRequest = await this.supportRequestRepository.findOne(
      signupEventData.supportRequestId
        ? { where: { id: signupEventData.supportRequestId } }
        : {},
    );

    if (!supportRequest) {
      throw new NotFoundException(`Support request not found`);
    }

    const existingSignupEvent = await this.signupEventRepository.findOne({
      where: { userId: signupEventData.userId, supportRequest: supportRequest },
    });

    if (existingSignupEvent) {
      throw new BadRequestException(
        'You have already made a request to this support request',
      );
    }

    const signupEvent = this.signupEventRepository.create({
      supportRequest: supportRequest,
      userId: signupEventData.userId,
      status: signupEventData.status,
    });

    return this.signupEventRepository.save(signupEvent);
  }
}

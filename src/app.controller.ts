import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

class CalculateCansRequest {
  initialCans: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/promo/cans')
  calculateCans(@Body() params: CalculateCansRequest) {
    return this.appService.calculateCans(params.initialCans);
  }
}

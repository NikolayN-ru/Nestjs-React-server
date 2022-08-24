import { Module } from '@nestjs/common';
import { Auth2Controller } from './auth2.controller';

@Module({
  controllers: [Auth2Controller]
})
export class Auth2Module {}

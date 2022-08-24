import { Body, Controller, Get, HttpCode, Post, Session } from '@nestjs/common';
import { AuthDto } from './dto/auth2.dto';

@Controller('auth2')
export class Auth2Controller {

    constructor() {}

    @Post('register')
    register(@Body() dto: Omit<AuthDto, '_id'>): string {
        // console.log(headers);
        return `auth2-register ${dto.login}`
    }

    @HttpCode(200)
    @Post('login')
    login(): string {
        return 'auth2-login'
    }
}

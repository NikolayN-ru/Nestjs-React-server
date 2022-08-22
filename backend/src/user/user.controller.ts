import { UpdateUserDto } from './dto/update.dto';
import { ExpressRequestInterface } from './../types/expressRequest.interface';
import { Body, Req, Controller, Get, Post, UsePipes, ValidationPipe, UseGuards, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { LoginUserDto } from "./dto/login.dto";
import { userResponseInterface } from "./types/userResponse.interface";
import { UserService } from "./user.service";
import { Request } from "express";
import { User } from './decorators/user.decorator';
import { UserEntity } from './user.entity';
import { AuthGuard } from './guards/auth.guard';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body('user') createUserDto: CreateUserDto): Promise<userResponseInterface> {
        const user = await this.userService.createUser(createUserDto);
        return this.userService.buildUserResponse(user);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body('user') loginUserDto: LoginUserDto): Promise<userResponseInterface> {
        const user = await this.userService.login(loginUserDto);
        return this.userService.buildUserResponse(user);
    }

    @Get('user')
    @UseGuards(AuthGuard)
    async currentUser(
        // @Req() request: ExpressRequestInterface,
        @User() user: UserEntity, @User('id') currentUserId: number): Promise<userResponseInterface> {
        // return this.userService.getCurrentUser();
        // console.log(request, 'request')
        // console.log(request.user )
        console.log('currentUserId', currentUserId)
        // return 'current' as any
        return this.userService.buildUserResponse(user);
    }

    @Put('user')
    @UseGuards(AuthGuard)
    async updateCurrentUser(
        @User('id') currentUserId: number,
        @Body('user') updateUserDto: UpdateUserDto)
        : Promise<userResponseInterface> {
        const user = await this.userService.updateUser(currentUserId, updateUserDto);
        return this.userService.buildUserResponse(user);
    }
}
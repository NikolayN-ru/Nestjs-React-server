import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('/testing')
export class AppController {

    constructor(private readonly appService: AppService){ }

    @Get()
    getUsers(): string{
        return this.appService.getUsers();
    }

    @Post()
    testing(){
        return 'test !!!'
    }
}
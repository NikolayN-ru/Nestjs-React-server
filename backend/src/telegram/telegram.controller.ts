import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import {Request} from "express";


@Controller('telegram')
export class TelegramController {


    constructor(private readonly telegramService: TelegramService) { }

    @Post()
    sendMessage(@Body() dto: any, @Req() req:Request) {
        console.log(dto, 'DTO');
        const message = `Order: ${dto.order}\n price: ${dto.price} `
        return this.telegramService.sendMessage(message);
    }


}
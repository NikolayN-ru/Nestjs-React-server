import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { Request } from "express";


@Controller('telegram')
export class TelegramController {


    constructor(private readonly telegramService: TelegramService) { }

    @Post()
    sendMessage(@Body() dto: any, @Req() req: Request) {
        console.log(dto, 'DTO');
        const message = `заказ: ${dto.order}\n на сумму: ${dto.price}\n от Пользователя: ${dto.owner}\n телефон: ${dto.phone}\n доставка: ${dto.delivery}\n оплата: ${dto.pay}`
        return this.telegramService.sendMessage(message);
    }
}
import { Body, Controller, Get } from "@nestjs/common";
import { TelegramService } from "./telegram.service";



@Controller('telegram')
export class TelegramController {


    constructor(private readonly telegramService: TelegramService) { }

    @Get()
    sendMessage(@Body() dto: any) {
        const message = `Order: ${dto.order}\n price: ${dto.price} `
        return this.telegramService.sendMessage(message);
    }


}
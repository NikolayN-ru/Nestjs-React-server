import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    
    getUsers(): string {
        return `all -users- ${Date.now()}`
    }
}

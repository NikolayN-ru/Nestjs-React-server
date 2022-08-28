import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { ExpressRequestInterface } from "../../../src/types/expressRequest.interface";
import {verify} from 'jsonwebtoken';
// import { JWT_SECRET } from "config";
import { JWT_SECRET } from "../../../config";
import { UserService } from "../user.service";


@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private readonly userService: UserService) { }

    async use(req: ExpressRequestInterface, res: Response, next: NextFunction) {
        // console.log('auth moddleware', req.headers);
        if(!req.headers.authorization){
            req.user = null;
            next();
            return
        }

        const token = req.headers.authorization.split (' ')[1];
        // console.log(token);
        try{
            const decode = verify(token, JWT_SECRET);
            // console.log(decode);
            const user = await this.userService.findById(decode.id);
            req.user = user;
            next();
        } catch(e){
            req.user = null;
            next();
        }
    }
}

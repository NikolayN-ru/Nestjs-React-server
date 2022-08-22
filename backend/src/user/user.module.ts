import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from "./guards/auth.guard";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

//postrges
@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, AuthGuard],
    exports: [UserService]
})
export class UserModule {
    // cinfigure(consumer: MiddlewareConsumer) {
    //     consumer.apply(AuthMiddleware).forRoutes({
    //         path: '*',
    //         method: RequestMethod.ALL
    //     })
    // }
 }

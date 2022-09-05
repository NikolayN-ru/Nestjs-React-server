import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import * as path from 'path';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { TagModule } from "./tag/tag.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormConfig from "./ormconfig";
import { UserModule } from "./user/user.module";
import { AuthMiddleware } from "./user/middlewares/auth.middleware";
import { ArticleModule } from "./article/article.module";
import { TelegramModule } from './telegram/telegram.module';
import { Auth2Module } from './auth2/auth2.module';
import { YarnModule } from './yarn/yarn.module';
import { NeedlesModule } from './needles/needles.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        // MongooseModule.forRoot('mongodb://admin:admin@localhost:27017'),
        MongooseModule.forRoot('mongodb://admin:admin@mongo:27017'),
        TypeOrmModule.forRoot(ormConfig),
        TrackModule,
        FileModule,
        ProductsModule,
        TagModule,
        UserModule,
        ArticleModule,
        TelegramModule,
        Auth2Module,
        YarnModule,
        NeedlesModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes({
            path: '*',
            method: RequestMethod.ALL
        })
    }
}
// Register мидлвару во все роуты (AuthMiddleware)
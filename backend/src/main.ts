if (!process.env.IS_TS_NODE) {
    require('module-alias/register');
}

import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
// import {morgan} from "morgan";


const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);
        // app.use(morgan('combined', { stream: 'accessLogStream' }));
        app.enableCors();
        // app.setGlobalPrefix('api');
        await app.listen(PORT, () => console.log(PORT, () => console.log(`server started on PORT ${PORT}`)));
    } catch (e) { }
}
start();

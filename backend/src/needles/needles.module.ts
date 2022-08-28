import { Module } from '@nestjs/common';
import { NeedlesService } from './needles.service';
import { NeedlesController } from './needles.controller';
import { FileService } from '../file/file.service';

@Module({
    controllers: [NeedlesController],
    providers: [NeedlesService, FileService]
})
export class NeedlesModule {}

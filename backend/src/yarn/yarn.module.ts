import { FileService } from '@app/file/file.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryYarn, CaterogyYarnSchema } from './schemas/category.schema';
import { ProductYarn, ProductYarnSchema } from './schemas/product.scema';
import { TagsYarn, TagsYarnSchema } from './schemas/tags.schemas';
import { VariablesYarn, VariablesYarnSchema } from './schemas/variables.schema';
import { YarnController } from './yarn.controller';
import { YarnService } from './yarn.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProductYarn.name, schema: ProductYarnSchema }]),
    MongooseModule.forFeature([{ name: CategoryYarn.name, schema: CaterogyYarnSchema }]),
    MongooseModule.forFeature([{ name: VariablesYarn.name, schema: VariablesYarnSchema }]),
    MongooseModule.forFeature([{ name: TagsYarn.name, schema: TagsYarnSchema }]),
  ],
  controllers: [YarnController],
  providers: [YarnService, FileService],
})
export class YarnModule { }

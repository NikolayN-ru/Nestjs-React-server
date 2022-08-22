import { CreateArticleDto } from './createArticle.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { User } from "src/user/decorators/user.decorator";
import { AuthGuard } from "src/user/guards/auth.guard";
import { UserEntity } from "src/user/user.entity";
import { ArticleService } from "./article.service";
import { ArticleResponseInterface } from './types/articleResponse.interface';
import { ArticleEntity } from './article.entity';

@Controller('articles')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) { }

    @Post()
    @UseGuards(AuthGuard)
    async create(@User() currentUser: UserEntity, @Body('article') createArticleDto: CreateArticleDto): Promise<ArticleResponseInterface> {
        const article = await this.articleService.createArticle(currentUser, createArticleDto);
        return this.articleService.buildArticleResponse(article);
    }

    @Get(':slug')
    async gegtSingleAtricle(@Param('slug') slug: string): Promise<ArticleResponseInterface> {
        //находим артикл по слагу
        const article = await this.articleService.findBySlug(slug);
        // возвращаем на фронтенд ответ
        return this.articleService.buildArticleResponse(article);
    }

    @Delete(':slug')
    @UseGuards(AuthGuard)
    async deleteArticle(@User('id') currentUserId: number, @Param('slug') slug: string): Promise<any> {
        return await this.articleService.deleteArticle(slug, currentUserId);
    }

    @Patch('all')
    async getAllArticles(): Promise<ArticleEntity[]> {
        return await this.articleService.getAllArticles();
    }

    @Put(':slug')
    @UseGuards(AuthGuard)
    // @UsePipes(new ValidationPipe())
    async updateArticle(@User('id') currentUserId: number, @Param('slug') slug: string, @Body('article') updateArticleDto: CreateArticleDto): Promise<ArticleResponseInterface> {
        const article = await this.articleService.updateArticle(slug, updateArticleDto, currentUserId);
        return this.articleService.buildArticleResponse(article);
    }

}

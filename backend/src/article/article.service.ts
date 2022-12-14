import { HttpException, HttpStatus } from '@nestjs/common';
import { UserEntity } from "src/user/user.entity";
import { ArticleEntity } from "./article.entity";
import { CreateArticleDto } from "./createArticle.dto";
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleResponseInterface } from "./types/articleResponse.interface";
import slugify from 'slugify';

export class ArticleService {
    constructor(@InjectRepository(ArticleEntity) private readonly articleRepository: Repository<ArticleEntity>) { }

    async createArticle(currentUser: UserEntity, createArticleDto: CreateArticleDto) {
        const article = new ArticleEntity();
        Object.assign(article, createArticleDto);
        if (!article.tagList) {
            article.tagList = [];
        }
        article.slug = this.getSlug(createArticleDto.title);
        article.author = currentUser;
        return await this.articleRepository.save(article);
    }

    async findBySlug(slug: string): Promise<ArticleEntity> {
        return await this.articleRepository.findOne({ where: { slug } });
    }

    async deleteArticle(slug: string, currentUserId: number): Promise<DeleteResult> {
        const article = await this.findBySlug(slug);
        if (!article) {
            throw new HttpException('Article does not exist', HttpStatus.NOT_FOUND);
        }
        if (article.author.id !== currentUserId) {
            throw new HttpException('you are not User Main-author', HttpStatus.FORBIDDEN);
        }
        return await this.articleRepository.delete({ slug: article.slug });
    }

    async getAllArticles(): Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }

    async updateArticle(slug: string, updateArticleDto: CreateArticleDto, currentUserId: number): Promise<ArticleEntity> {
        const article = await this.findBySlug(slug);
        if (!article) {
            throw new HttpException('Article does not exist', HttpStatus.NOT_FOUND);
        }
        if (article.author.id !== currentUserId) {
            throw new HttpException('you are not User Main-author', HttpStatus.FORBIDDEN);
        }
        Object.assign(article, updateArticleDto);
        return await this.articleRepository.save(article);
    }

    buildArticleResponse(article: ArticleEntity): ArticleResponseInterface {
        return { article };
    }

    private getSlug(title: string): string {
        return slugify(title, { lower: true }) + '-' + ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
    }
}

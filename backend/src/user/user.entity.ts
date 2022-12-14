import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from "typeorm";
import {hash} from 'bcryptjs';
// import { ArticleEntity } from "src/article/article.entity";
import { ArticleEntity } from "../../src/article/article.entity";

@Entity({ name: "users" })
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column({ default: '' })
    bio: string;

    @Column({ default: '' })
    image: string;

    @Column({select: false})
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10);
    }

    @OneToMany(()=> ArticleEntity, article => article.author)
    articles: ArticleEntity[];
    
}
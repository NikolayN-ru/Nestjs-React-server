import { UpdateUserDto } from './dto/update.dto';
import { LoginUserDto } from './dto/login.dto';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from "../../config";
import { userResponseInterface } from "./types/userResponse.interface";
import { compare } from 'bcrypt';


@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const userByEmail = await this.userRepository.findOne({
            where: { email: createUserDto.email }
        });
        const userByUsername = await this.userRepository.findOne({
            where: { username: createUserDto.username, }
        });
        //  выброс ошибки - они боблится т.е. поднимается
        if (userByEmail || userByUsername) {
            throw new HttpException('Email or username are taken', HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDto);
        return await this.userRepository.save(newUser);
    }

    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: { email: loginUserDto.email },
            select: { 'id': true, 'username': true, 'email': true, 'bio': true, 'image': true, 'password': true }
        }

        );

        if (!user) {
            throw new HttpException('credentionls are not walid', HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const isPasswordCorrect = await compare(loginUserDto.password, user.password)

        if (!isPasswordCorrect) {
            throw new HttpException('credentionls are not walid', HttpStatus.UNPROCESSABLE_ENTITY);
        }

        delete user.password
        return user;
    }

    findById(id: number): Promise<UserEntity> {
        return this.userRepository.findOne({
            where: { id },
        })
    }

    async updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        Object.assign(user, updateUserDto);
        return await this.userRepository.save(user)
    }

    generateJwt(user: UserEntity): string {
        return sign({
            id: user.id,
            username: user.username,
            email: user.email,
        }, JWT_SECRET)
    }

    buildUserResponse(user: UserEntity): userResponseInterface {
        return {
            user: {
                ...user, token: this.generateJwt(user),
            },
        };
    }
}

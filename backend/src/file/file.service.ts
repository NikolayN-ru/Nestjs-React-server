import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import slugify from 'slugify';

export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image'
}

const getSlug = (title: string): string => {
    return slugify(title, { lower: true });
}

@Injectable()
export class FileService {
    createFile(type: FileType, file: any): string {
        try {
            const fileMainName = file.originalname.split('.')[0];
            const fileExtension = file.originalname.split('.').pop();
            const fileName = getSlug(fileMainName) + '-' + uuid.v4() + '.' + fileExtension;
            const filePath = path.resolve(__dirname, '..', 'static', type);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
            return type + '/' + fileName;
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    removeFile(fileName: string) {
        // fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);

        // console.log(__dirname, '__dirname');
        const filePath = path.resolve(__dirname, '..', 'static', fileName);
        // console.log(filePath, 'filePath-Full');
        // console.log(fileName, 'fileName');

        fs.unlink(filePath, err => {
            if (err) {
                console.log('неудалось удалить файл', err);
            } // не удалось удалить файл
            console.log('Файл успешно удалён');
        });
    }
}

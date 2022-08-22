import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { FileService, FileType } from "src/file/file.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { Track, TrackDocument } from "./schemas/track.schema";


@Injectable()
export class TrackService {

    // этой строчкой мы используем модель внутринашего сервиса
    // она будет доступна через this 
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private fileService: FileService) { }

    // так как функция ASYNC - она возвращает промис
    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)

        const track = await this.trackModel.create({ ...dto, listens: 0, audio: audioPath, picture: picturePath })
        return track;

        // http://localhost:5000/tracks | POST-raw-json!
        // {
        //     "name":"name-track",
        //     "artist": "Vai",
        //     "text": "Name in pesnua"
        // }
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        const alltracks = await this.trackModel.find().skip(offset).limit(count);
        return alltracks
    }

    async getOne(id: ObjectId): Promise<Track> {
        const track = await this.trackModel.findById(id).populate('comments')
        return track
    }

    async search(query: string): Promise<Track[]> {
        const tracks = await this.trackModel.find({
            name: { $regex: new RegExp(query, 'i') }
        })
        return tracks;
    }

    async getDelete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id)
        return track._id
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({ ...dto })
        track.comments.push(comment._id);
        await track.save();
        return comment;
    }

    //доделать
    async getPut(id: ObjectId, param: any): Promise<Track> {
        const track = await this.trackModel.findById(id);
        // await track.update({artist: param.name})
        // await track.save();
        // return track

        await track.updateOne({ artist: param.name })
        const track2 = await this.trackModel.findById(id);
        return track2
    }

    async listen(id: ObjectId) {
        const track = await this.trackModel.findById(id);
        track.listens += 1
        track.save()
    }
}
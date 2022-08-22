import { UserType } from "./user.type";

export interface userResponseInterface {
    user: UserType & {token:string};
}
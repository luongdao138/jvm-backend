import { BaseEntity } from '../common/models/base-entity';
import { Post } from './post';
export declare class User extends BaseEntity {
    username: string;
    email: string;
    posts: Post[];
    private beforeInsert;
}

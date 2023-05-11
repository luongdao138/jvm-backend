import { BaseEntity } from '../common/models/base-entity';
import { User } from './user';
export declare class Post extends BaseEntity {
    title: string | null;
    description: string;
    user_id: string;
    user: User;
    private beforeInsert;
}

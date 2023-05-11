import { BaseEntity } from '../common/models/base-entity';
import { User } from './user';
export declare class Comment extends BaseEntity {
    title: string | null;
    text: string | null;
    user_id: string;
    user: User;
    private beforeInsert;
}

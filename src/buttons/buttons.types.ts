import { Types } from 'mongoose';
import { Button } from './entities/button.schema';

export type ButtonDocument = Button & {
    _id: Types.ObjectId;
} & {
    __v?: number;
};

import { Types } from 'mongoose';
import { Button } from './schemas/button.schema';

export type ButtonDocument = Button & {
    _id: Types.ObjectId;
} & {
    __v?: number;
};

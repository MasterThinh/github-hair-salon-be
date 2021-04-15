import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StaffDocument = Staff & Document;

@Schema()
export class Staff {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    username: string;

    @Prop({ type: String, select: false })
    password: string;

}

export const StaffSchema = SchemaFactory.createForClass(Staff);
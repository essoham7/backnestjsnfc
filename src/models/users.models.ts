import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  companyname: string; //

  @Prop({ required: true })
  phone: number; //avatar, fullname, title, companyname, email, github, facebook, whatsapp, linkedin, tiktok, website, phone, phoneprincipal, map

  @Prop({ required: true })
  phoneprincipal: number; //

  @Prop({ required: true })
  email: string; //

  @Prop()
  github: string;

  @Prop()
  facebook: string;

  @Prop()
  whatsapp: number;

  @Prop()
  linkedin: string;

  @Prop()
  tiktok: string;

  @Prop()
  map: string;

  @Prop({ required: true })
  website: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

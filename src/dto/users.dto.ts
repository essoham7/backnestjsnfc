import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  avatar: string;

  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  companyname: string;

  @IsNotEmpty()
  phone: number; //avatar, fullname, title, companyname, email, github, facebook, whatsapp, linkedin, tiktok, website, phone, phoneprincipal, map

  @IsNotEmpty()
  phoneprincipal: number;

  @IsNotEmpty()
  whatsapp: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  website: string;

  @IsNotEmpty()
  facebook: string;

  @IsNotEmpty()
  linkedin: string;

  @IsNotEmpty()
  github: string;

  @IsNotEmpty()
  tiktok: string;

  @IsNotEmpty()
  map: string;
}

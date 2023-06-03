import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/users.models';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  Add(body: UserDto) {
    return this.userModel.create(body);
  }

  FindAll() {
    return this.userModel.find();
  }

  FindOne(id: string) {
    return this.userModel.findOne({ _id: id });
  }

  Update(id: string, body) {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.userModel.findOneAndRemove({ _id: id });
  }

  search(key: string) {
    const keyword = key
      ? {
          $or: [
            { fullname: { $regex: key, $options: 'i' } },
            { email: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return this.userModel.find(keyword);
  }

  Faker() {
    for (let index = 0; index < 30; index++) {
      const fakeUser = {
        avatar: faker.image.avatar(),
        fullname: faker.name.fullName(),
        title: faker.name.jobTitle(),
        companyname: faker.company.name(),
        email: faker.internet.email(),
        github: faker.internet.userName(),
        facebook: faker.internet.userName(),
        whatsapp: faker.phone.number(),
        linkedin: faker.internet.userName(),
        tiktok: faker.internet.userName(),
        website: faker.internet.url(),
        phone: faker.phone.number(),
        phoneprincipal: faker.phone.number(),
      };
      this.userModel.create(fakeUser);
    }
    return 'success';
  }
}
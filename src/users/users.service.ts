import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private _usersRepository: Repository<Users>
    ) {

    }

    async getAllUsers() {
        return await this._usersRepository.find();
    }

    getUser() {

    }

    async createUser(userCreationData) {
        let a = await this._usersRepository.save(userCreationData);
        console.log(a);
        return a;
    }

}

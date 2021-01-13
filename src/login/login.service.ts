import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './login.entity';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(Login)
        private _loginRepository: Repository<Login>
    ) {

    }

    async createUser(userCreationData: Login) {
        return await this._loginRepository.save(userCreationData);
    }

}

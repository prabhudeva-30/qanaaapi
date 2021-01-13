import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly _loginService: LoginService) {

    }

    @Post('login')
    async login() {

    }

    @Post('register')
    async register(@Body() createUserData: any) {
       return this._loginService.createUser(createUserData);
    }

}

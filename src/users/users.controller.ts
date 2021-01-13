import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Users } from 'src/users/users.entity';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    // @Get()
    // async getUsers(): Promise<any> {
    //     return await this.usersService.getAllUsers();
    // }

    @Get('getAllUsers')
    async login() {
        return await this.usersService.getAllUsers();
    }

    @Get('mono')
    async logins() {
        return await this.usersService.getAllUsers();
    }

    @Get('newUsers')
    async loginer() {
        return await this.usersService.getAllUsers();
    }

    @Post('register')
    async register(@Body() userDTO: UserDto): Promise<any> {
        //return `user is here ${userDTO.name}`;  
        return await this.usersService.createUser(userDTO);
    }


}

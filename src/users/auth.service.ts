import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async signup(email: string, password: string) {
    console.log('Auth Service Signup');
    // see if a user with this email exists
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('Email in use');
    }
    // hash the users password

    // create a new user and save it

    // return the user
  }
  signin() {
    console.log('Auth Service Signin');
  }
}

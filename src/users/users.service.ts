import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }
  findOne(id: number) {
    if (!id) {
      throw new NotFoundException('User not found');
    }
    return this.repo.findOne({ where: { id } });
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  findAll() {
    return this.repo.find();
  }
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      console.log('User not found with id: ', id);
      throw new NotFoundException('User not found with id: ' + id);
    }
    console.log('Removed User with id', id);
    return this.repo.remove(user);
  }
}

import { UserRepository } from '../../core/repositories/UserRepository';
import { User } from '../../core/entities/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationRepository implements UserRepository {
  private users: User[] = [{ id: 1, name: 'Caio' }];

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getAll(): Promise<User[]> {
    return this.users;
  }
}

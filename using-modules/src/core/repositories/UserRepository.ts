import { User } from '../entities/User';

export interface UserRepository {
  save(user: User): Promise<User>;

  getAll(): Promise<User[]>;
}

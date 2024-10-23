import {UserRepository} from "../../core/repositories/UserRepository";
import {User} from "../../core/entities/User";
import {Inject} from "@nestjs/common";

export class UserServices {
    constructor(
        @Inject('RepositoryToken')
        private readonly userRepository: UserRepository)
    {}

    async createUser(name: string): Promise<User> {
        const user = new User(1, name);
        return this.userRepository.save(user);
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.getAll();
    }
}
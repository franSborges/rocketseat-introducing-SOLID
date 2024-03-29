/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();
    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((u) => u.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((u) => u.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const user = this.users.find(u => u.id === receivedUser.id);
    Object.assign(user, {
      admin: true,
      updated_at: new Date(),
    });
    return user;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };

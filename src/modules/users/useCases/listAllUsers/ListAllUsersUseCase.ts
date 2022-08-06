/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const checkUserAlready = this.usersRepository.findById(user_id);
    if (!checkUserAlready.id) {
      throw new Error("User does not exist");
    }

    if (checkUserAlready.admin !== true) {
      throw new Error("User is not admin");
    }
    
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const checkUserAlreadyExists = this.usersRepository.findById(user_id);

    if (!checkUserAlreadyExists) {
      throw new Error("User not Found");
    }

    const user = this.usersRepository.turnAdmin(checkUserAlreadyExists);
    return user;
  }
}

export { TurnUserAdminUseCase };

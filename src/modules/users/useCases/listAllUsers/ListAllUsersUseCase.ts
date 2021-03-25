import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userAlreadyExist = this.usersRepository.findById(user_id);

    if(!userAlreadyExist) {
      throw new Error('User does not exist');
    }

    if(userAlreadyExist.admin === false) {
      throw new Error('User is not Admin');
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };

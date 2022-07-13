import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    if (!this.usersRepository.findById(user_id))
      throw new Error("Não existe usuário com esse id.");
    const turnAdmin = this.usersRepository.turnAdmin({ id: user_id });
    return turnAdmin;
  }
}

export { TurnUserAdminUseCase };

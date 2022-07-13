import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if (this.usersRepository.findByEmail(email)) {
      throw new Error("Já existe um usuário cadastrado com esse email");
    }
    const createUser = this.usersRepository.create({ email, name });
    return createUser;
  }
}

export { CreateUserUseCase };

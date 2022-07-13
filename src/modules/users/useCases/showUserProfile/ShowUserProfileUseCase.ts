import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const showProfile = this.usersRepository.findById(user_id);
    if (!showProfile) {
      throw new Error("Não existe usuário com esse Id.");
    }
    return showProfile;
  }
}

export { ShowUserProfileUseCase };

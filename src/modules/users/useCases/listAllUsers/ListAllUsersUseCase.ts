import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    if (!user_id) throw new Error("You need to login to access this resource.");
    const requestUser = this.usersRepository.findById(user_id);
    if (!requestUser) {
      throw new Error("Nenhum usuário encontrado com este id.");
    }
    if (!requestUser.admin)
      throw new Error("Você não tem permissões o suficiente.");
    const listAll = this.usersRepository.list();
    return listAll;
  }
}

export { ListAllUsersUseCase };

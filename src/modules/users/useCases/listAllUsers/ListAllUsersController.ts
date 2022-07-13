import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const listAll = this.listAllUsersUseCase.execute(request.headers as any);
      return response.send(listAll);
    } catch (e) {
      if (e.message == "Você não tem permissões o suficiente.") {
        return response.status(400).send({
          error: e.message,
        });
      }
      return response.status(400).send({
        error: e.message,
      });
    }
  }
}

export { ListAllUsersController };

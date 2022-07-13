import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const createUser = this.createUserUseCase.execute(request.body);

      return response.status(201).send(createUser);
    } catch (e) {
      return response.status(400).send({ error: e.message });
    }
  }
}

export { CreateUserController };

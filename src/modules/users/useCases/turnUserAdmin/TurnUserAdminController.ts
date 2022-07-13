import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const turnAdmin = this.turnUserAdminUseCase.execute(
        request.params as { user_id: string }
      );
      return response.send(turnAdmin);
    } catch (e) {
      if (e.message == "Não existe usuário com esse id.") {
        return response.status(404).send({ error: e.message });
      }
      return response.status(400).send({ error: e.message });
    }
  }
}

export { TurnUserAdminController };

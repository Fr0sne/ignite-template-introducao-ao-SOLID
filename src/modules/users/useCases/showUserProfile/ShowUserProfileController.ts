import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const showProfile = this.showUserProfileUseCase.execute({
        user_id: request.params.user_id,
      });
      return response.send(showProfile);
    } catch (e) {
      if (e.message == "Não existe usuário com esse Id.") {
        return response.status(404).send({
          error: e.message,
        });
      }
      return response.status(400).send({
        error: e.message,
      });
    }
  }
}

export { ShowUserProfileController };

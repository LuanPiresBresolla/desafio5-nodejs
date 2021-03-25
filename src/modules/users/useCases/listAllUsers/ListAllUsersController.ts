import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.headers;
    
      if(!user_id) {
        return response.status(401).json({ error: 'Token not found' });
      }

      const users = this.listAllUsersUseCase.execute({ user_id: String(user_id) });

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: 'User is not admin or not found' });
    }
  }
}

export { ListAllUsersController };

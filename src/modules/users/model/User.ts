import { v4 as uuidV4, v4 } from "uuid";

class User {
  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;
  constructor() {
    this.id = v4();
    this.admin = false;
    this.updated_at = new Date();
    this.created_at = new Date();
  }
}
export { User };

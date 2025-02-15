import {user, user_role} from "@prisma/client"
import{Exclude, Expose} from "class-transformer"

export class User {

  @Expose()
  id: number;

  @Expose()
  username: string;

  @Exclude()
  password: string;

  @Expose()
  role:user_role;
}
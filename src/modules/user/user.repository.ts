import { EntityRepository, Repository } from "typeorm";
import { User } from "../../entity/user.entity";
import * as bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private static async hashPassword(
    password: string,
    salt: string
  ): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}





import { UserRepository } from "src/modules/user/user.repository";
import { JwtPayload } from "./jwt-payload.interface";
import { User } from "../../entity/user.entity";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};

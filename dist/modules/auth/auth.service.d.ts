import { UserRepository } from "src/modules/user/user.repository";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/entity/user.entity";
import { CreateUserDto } from "./dto/crete-user.dto";
import { logoutDto } from "./dto/log-out.dto";
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    login(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
    logout(logoutdto: logoutDto, user: User): Promise<any>;
}

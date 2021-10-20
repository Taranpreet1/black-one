import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/crete-user.dto";
import { logoutDto } from "./dto/log-out.dto";
import { User } from "src/entity/user.entity";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
    logout(logoutdto: logoutDto, user: User): Promise<any>;
}

import { UnauthorizedException, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export declare class UnauthorizedExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost): void;
    filterResponse(message: any): any[];
}

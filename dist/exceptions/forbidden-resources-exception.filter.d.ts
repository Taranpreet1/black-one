import { ExceptionFilter, ArgumentsHost, ForbiddenException } from "@nestjs/common";
export declare class ForbiddenExceptionFilter implements ExceptionFilter {
    catch(exception: ForbiddenException, host: ArgumentsHost): void;
    filterResponse(message: any): any[];
}

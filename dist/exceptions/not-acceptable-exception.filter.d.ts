import { ExceptionFilter, ArgumentsHost, NotAcceptableException } from "@nestjs/common";
export declare class NotAcceptableExceptionFilter implements ExceptionFilter {
    catch(exception: NotAcceptableException, host: ArgumentsHost): void;
    filterResponse(message: any): any[];
}

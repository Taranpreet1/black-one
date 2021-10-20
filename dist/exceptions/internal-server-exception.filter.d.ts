import { InternalServerErrorException, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export declare class InternalServerErrorExceptionFilter implements ExceptionFilter {
    catch(exception: InternalServerErrorException, host: ArgumentsHost): void;
    filterResponse(message: any): any[];
}

import { ExceptionFilter, ArgumentsHost, ConflictException } from "@nestjs/common";
export declare class ConflictExcepionFilter implements ExceptionFilter {
    catch(exception: ConflictException, host: ArgumentsHost): void;
    filterResponse(message: any): any[];
}

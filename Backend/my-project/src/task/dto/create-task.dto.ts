import { IsString, IsOptional, IsDateString, IsEnum, IsNotEmpty } from "class-validator";
import { Priority } from "../priority.enum";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;
    
    @IsDateString()
    @IsOptional()
    dueDate?: string;   
    
    @IsEnum(Priority)
    @IsNotEmpty()
    priority: Priority;
}
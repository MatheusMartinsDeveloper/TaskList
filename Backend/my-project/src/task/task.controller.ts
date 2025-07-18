import { Controller, Body, Post, Get, Delete, Param, ParseIntPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("task")
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post("createTask")
    async create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }

    @Get("getAllTasks")
    async getAll() {
        return this.taskService.getAllTasks();
    }

    @Delete("deleteTask/:id")
    async deleteOne(@Param("id") id: string) {
        return this.taskService.deleteTask(id);
    }
}
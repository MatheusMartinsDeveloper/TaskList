import { Injectable } from "@nestjs/common";
import { Prisma, Task } from "generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description, dueDate, priority } = createTaskDto;

        const taskNewData: Prisma.TaskCreateInput = {
            title,
            description,
            dueDate,
            priority
        }

        return this.prisma.task.create({
            data: taskNewData
        });
    }

    async getAllTasks() {
        return this.prisma.task.findMany();
    }
}
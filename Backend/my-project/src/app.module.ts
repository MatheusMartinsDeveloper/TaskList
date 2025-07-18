import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { TaskModule } from "./task/task.module";

@Module({
  imports: [PrismaModule, TaskModule],
})
export class AppModule {}
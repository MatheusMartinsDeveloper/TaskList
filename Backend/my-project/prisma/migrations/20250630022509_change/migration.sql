/*
  Warnings:

  - You are about to drop the column `dueData` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "dueData",
ADD COLUMN     "dueDate" TIMESTAMP(3),
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

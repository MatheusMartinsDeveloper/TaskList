import { Component, OnInit } from "@angular/core";
import { TaskService } from "../Form/task.service";
import { CheckboxModule } from 'primeng/checkbox';
import type { Task } from "../Form/task.service";
import { NgClass, NgFor } from "@angular/common";

@Component({
    selector: "app-task-list",
    standalone: true,
    imports: [CheckboxModule, NgFor, NgClass],
    templateUrl: "./task-list.component.html"
})
export class TaskList implements OnInit {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) {}

    formatPriority(value: string): string {
        switch (value) {
            case "Media":
                return "Média";
            case "Dificil":
                return "Dificíl";
            default:
                return value;
        }
    }

    ngOnInit() {
        this.taskService.getAllTasks().subscribe({
            next: (tasks) => {
                this.tasks = tasks.map(task => ({
                    ...task,
                    priority: this.formatPriority(task.priority)
                }));
                console.log("Tarefas", tasks);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }

    delete(idTask: number) {
        this.taskService.deleteTask(idTask).subscribe({
            next: () => {
                this.tasks = this.tasks.filter(task => task.id !== idTask);
                console.log("Tarefa Deletada!");
            },
            error: (err) => {
                console.log("Erro", err);
            }
        });
    }
}
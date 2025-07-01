import { Component, OnInit } from "@angular/core";
import { TaskService } from "./task.service";
import { VisibilityFormService } from "../../services/visibilityForm.service";
import { FormsModule } from "@angular/forms";
import { TextareaModule } from "primeng/textarea";
import { Task } from "./task.service";
import { CreateTask } from "./task.service";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-form",
    standalone: true,
    imports: [FormsModule, TextareaModule, NgIf],
    templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
    tasks: Task[] = [];
    title: string = "";
    description: string = "";
    dueDate: string = "";
    priority: string = "Media";

    isVisible: boolean = false;

    constructor(private taskService: TaskService, private visibilityService: VisibilityFormService) {}

    ngOnInit() {
        this.visibilityService.visibility.subscribe(value => {
            this.isVisible = value;
        });

        this.taskService.getAllTasks().subscribe({
            next: (tasks) => {
                this.tasks = tasks;
                console.log("Tarefas:", tasks);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }

    toggle() {
        return this.visibilityService.toggle();
    }

    onSubmit() {
        const task: CreateTask = {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate ? new Date(this.dueDate).toISOString() : undefined,
            priority: this.priority
        };

        this.taskService.createTask(task).subscribe({
            next: (createdTask) => {
                console.log("Tarefa criada:", createdTask);

                this.title = "";
                this.description = "";
                this. dueDate = "";
                this.priority = "Media";
            },
            error: (err) => {
                console.error("Error na criação da tarefa:", err);
            }
        });
    }
}
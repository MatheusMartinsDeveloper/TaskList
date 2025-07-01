import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TextareaModule } from "primeng/textarea";

@Component({
    selector: "app-form",
    standalone: true,
    imports: [FormsModule, TextareaModule],
    templateUrl: "./form.component.html",
})
export class FormComponent {
    title: string = "";
    description: string = "";
    dueDate: string = "";
    priority: string = "Media";

    onSubmit() {
        const task = {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority
        };

        console.log("Nova tarefa criada!", task);
    }
}
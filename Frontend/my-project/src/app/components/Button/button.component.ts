import { Component } from "@angular/core";
import { VisibilityFormService } from "../../services/visibilityForm.service";

@Component({
    selector: "app-button",
    standalone: true,
    templateUrl: "./button.component.html"
})
export class ButtonComponent {
    constructor(private visibilityService: VisibilityFormService) {}

    toggleForm() {
        this.visibilityService.toggle();
    }
}
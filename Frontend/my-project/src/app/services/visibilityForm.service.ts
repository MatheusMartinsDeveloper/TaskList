import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class VisibilityFormService {
    private visibilitySubject = new BehaviorSubject<boolean>(false);
    visibility = this.visibilitySubject.asObservable();

    toggle() {
        this.visibilitySubject.next(!this.visibilitySubject.value);
    }
}
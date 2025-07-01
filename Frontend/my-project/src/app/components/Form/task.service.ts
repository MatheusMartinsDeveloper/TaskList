import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Task {
    id: number;
    title: string;
    description?: string;
    dueDate?: string;
    priority: string;
    isDone: boolean;
}

@Injectable({
    providedIn: "root"
})
export class TaskService {
    private apiUrl = "http://localhost:3000/task";

    constructor(private http: HttpClient) {}

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl + "/getAllTasks");
    }
}
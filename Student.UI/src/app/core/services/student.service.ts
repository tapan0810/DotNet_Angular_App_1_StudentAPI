import { Injectable } from "@angular/core";
import { env } from "../../../environment";
import { HttpClient } from "@angular/common/http";
import { Student } from "../models/student";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StudentService {

    private api = env.apiUrl + '/Students';

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.api);
    }

    getStudent(id: number): Observable<Student> {
        return this.http.get<Student>(`${this.api}/${id}`);
    }
    createStudent(student: Student) {

        return this.http.post<Student>(this.api, student);

    }

    deleteStudent(id: number) {

        return this.http.delete(`${this.api}/${id}`);

    }


}
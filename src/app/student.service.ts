import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from "rxjs";
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("http://localhost:8080/fetch").pipe(catchError(this.handleError));
  }

  saveStudent(name:string, surname:string, email:string):Observable<Student[]> {
    return this.http.post<Student[]>("http://localhost:8080/save", {
      "name":name,
      "surname":surname,
      "email":email
      }).pipe(catchError(this.handleError));
  }

  deleteStudent(id:number):Observable<Student[]> {
    return this.http.delete<Student[]>("http://localhost:8080/delete/"+id)
      .pipe(catchError(this.handleError));
  }

  updateStudents(id:string, name:string, surname:string, email:string): Observable<Student[]> {
    return this.http.put<Student[]>("http://localhost:8080/update",{
      "id":id,
      "name":name,
      "surname":surname,
      "email":email
    }).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => {
      return error.message;
    })
  }
}

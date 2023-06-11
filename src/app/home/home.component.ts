import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public students: Student[] = []

  constructor(private studentService: StudentService, private router:Router) {

  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      }, error: (error) => {
        console.log(error);
      }
    },)
  }

  delete(id:number) {
    console.log("Delete: "+id);
    this.studentService.deleteStudent(id).subscribe({
      next:(data)=>{
        // this.students=data;
       this.students = this.students.filter((student)=>{
          return student.id!==id;
        })
      },
      error:(error) =>{
        console.log(error);
      }
    })
  }

  update(student : Student) {
    this.router.navigate(['update', student.id, student.name, student.surname, student.email])
  }

}

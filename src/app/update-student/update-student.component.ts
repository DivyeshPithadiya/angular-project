import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent  implements OnInit{

  constructor(private route: ActivatedRoute, private studentService:StudentService, private router:Router) {}
  
  id:any="";
  name:any="";
  surname:any="";
  email:any="";

  public updateForm:FormGroup = new FormGroup({
    name:new FormControl(this.name),
    surname:new FormControl(this.surname),
    email:new FormControl(this.email)
  });

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(data)=>{
        this.id=data.get('id');
        this.name=data.get('name');
        this.surname=data.get('surname');
        this.email=data.get('email');
      }
    })

    this.updateForm.setValue({
        name:this.name,
        surname:this.surname,
        email:this.email,
      }
    )
  }

  submit() {
    this.studentService.updateStudents(this.id,
    this.updateForm.get('name')?.value,
    this.updateForm.get('surname')?.value,
    this.updateForm.get('email')?.value).subscribe({
      next:(data)=>{
        this.router.navigate(['home']);
      },
      error:(error)=>{
        alert(error);
      }
    })
  }



}

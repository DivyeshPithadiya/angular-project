import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Student } from '../models/student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import {spamNameValidator} from "../common/spam-name.validator";
 
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private studentService: StudentService, private router:Router, private fb:FormBuilder) {}

  public regForm: FormGroup = this.fb.group({
    name:["", [Validators.required, Validators.minLength(3), spamNameValidator(/user|admin/)]],
    surname:["", [Validators.required, Validators.minLength(3)]],
    email:["", [Validators.required, Validators.email]],
    // address:this.fb.group({
    //   street:[""],
    //   state:[""],
    //   country:[""]
    // })
  })

  submit() {
    this.studentService.saveStudent(this.regForm.get('name')?.value,
    this.regForm.get('surname')?.value,
    this.regForm.get('email')?.value).subscribe({next:(data)=>{
      this.router.navigate(['home'])
    }, error:(error)=>{
      alert(error);
    }})
  }

  isNameValidForRequired() {
    if(this.regForm.get('name')?.touched && this.regForm.get('name')?.hasError('required') ) {
      return true;
    }else if(this.regForm.get('name')?.value==="") {
      return true;
    }
  return false;
  }

  isNameValidForMinLength() {
    if(this.regForm.get('name')?.touched && this.regForm.get('name')?.hasError('minlength')) {
      return true;
    } else if(this.regForm.get('name')?.value.length<3) {
      return true;
    }
    return false;
  }

}

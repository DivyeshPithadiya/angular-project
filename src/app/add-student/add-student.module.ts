import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../common/shared/shared.module';

const routes:Routes = [
  {path:'',component:AddStudentComponent}
]

@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
   ],
  exports :[AddStudentComponent,RouterModule
  ]
})
export class AddStudentModule { 

  constructor() {
    console.log("Add student module")
  }

}

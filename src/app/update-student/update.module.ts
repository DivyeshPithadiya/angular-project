import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateStudentComponent } from './update-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../common/shared/shared.module';

const routes:Routes = [
  {path:'',component:UpdateStudentComponent}
] 

@NgModule({
  declarations: [ UpdateStudentComponent ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    UpdateStudentComponent,
    RouterModule
  ]
})
export class UpdateModule { 

  constructor() {
    console.log("Update student module")
  }

}

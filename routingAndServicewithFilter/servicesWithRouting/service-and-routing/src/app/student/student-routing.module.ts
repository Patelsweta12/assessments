import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
 { path: '',redirectTo: 'student-list',pathMatch: 'full'},
 { path: 'student-list', component: StudentListComponent},
 { path: 'add-student/:id', component: AddStudentComponent }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

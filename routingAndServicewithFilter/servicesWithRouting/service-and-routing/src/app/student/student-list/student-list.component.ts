import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
public studentList:any;
filter: any='';
  constructor(private studentService:StudentService, private routes:Router) { }

  ngOnInit() {
    this.studentService.getData().subscribe((res:any)=>this.studentList=res)
  }
  deleteStudent(id:any){
    this.studentService.removeStudent(id).subscribe(data=>data)
    // this.studentService.getData().subscribe((res:any)=>this.studentList=res)
    this.studentService.getData().subscribe((res:any)=>this.studentList=res)
  }

//on click to edit it navigated to form page
  editStudent(id:any){
    this.routes.navigate(['add-student',id])

  }
  //on the lick to add student it navigates to student form 
  navigateToForm(){
    this.routes.navigate(['add-student',""])
  }
}

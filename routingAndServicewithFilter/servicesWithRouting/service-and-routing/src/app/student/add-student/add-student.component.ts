import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  id: any;
  editStudent: any;
  editMode: boolean = false;
  currentStudentId: any;

  constructor(private studentService: StudentService, private routes: Router, private activatedRoutes: ActivatedRoute) { }
  reactiveForm!: FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      gender:new FormControl(null,Validators.required),
      technology: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    });
    //rective form ends



    this.id = this.activatedRoutes.snapshot.paramMap.get('id')
    if (this.id!="") {
      this.studentService.getById(this.id).subscribe(res => {
        this.editStudent = res;
        this.reactiveForm.setValue({
          name: this.editStudent.name,
          age: this.editStudent.age,
          gender:this.editStudent.gender,
          technology: this.editStudent.technology,
          address: this.editStudent.address
        })
      });

      this.editMode = true;
    }
  }
  onSubmit() {
    if(!this.editMode){
    this.studentService.postData(this.reactiveForm.value).subscribe((data) => data)
   
    
    }
    else{
      this.studentService.updateStudent(this.id,this.reactiveForm.value).subscribe(res=>res);
    }

    this.routes.navigate(['student-list'])
  }

}

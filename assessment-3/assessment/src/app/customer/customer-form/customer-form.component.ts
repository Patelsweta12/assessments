import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit, OnChanges {
  @Output() postCustomerEvent = new EventEmitter(); //post customer  data through form
  @Input() obtainedEditData: any;
  isClose:boolean=false;
  @Output() toCloseFormEvent = new EventEmitter(); 
  editMode: boolean = false;
  @Output() updateCustomerEvent =new EventEmitter();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   if (this.obtainedEditData) {
    this.customerForm.setValue({
    name:this.obtainedEditData.name,
      description:this.obtainedEditData.description,
      status:this.obtainedEditData.status,
      rate:this.obtainedEditData.rate,
      balance:this.obtainedEditData.balance
    })
    this.editMode=true;
   }
  }

  toCloseForm(){
this.toCloseFormEvent.emit(this.isClose); // to close form on cancel button
  }

  customerForm!: FormGroup;
 
ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern("(/^[A-Za-z]+$/)"),    
      
        Validators.minLength(3),
        Validators.maxLength(25)
      ]),
      description: new FormControl(null,[
        Validators.required,
        Validators.pattern(" /^[ A-Za-z0-9_@./#&+-]$/"),    
        
        Validators.minLength(3),
        Validators.maxLength(150)
      ]),
      status: new FormControl(null,Validators.required),

      rate: new FormControl(null,Validators.required),
      balance: new FormControl(null,Validators.required),
  
    })
    this.editMode=false;
  }

  postCustomertData(){
    debugger
    this.postCustomerEvent.emit(this.customerForm.value)
  }


  updateCustomerData(){
    debugger
    const d= {
      id:this.obtainedEditData.id,
      formValue:this.customerForm.value
    }
    this.updateCustomerEvent.emit(d)
  }
}

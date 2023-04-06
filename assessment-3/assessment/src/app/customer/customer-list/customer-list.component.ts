import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  filter: any='';
@Input() customerListData: any;
isOpen:boolean=true;
@Output() deleteEvent = new EventEmitter(); //to delete customer by id
@Output() toOpenFormEvent= new  EventEmitter();
@Output() editCustomerEvent=new EventEmitter();
public id:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.customerListData);
  }

  toFormOpen(){
    this.toOpenFormEvent.emit(this.isOpen)
  }

  deleteCustomer(id:number){
this.deleteEvent.emit(id)
  }


  getCustomerById(id:number){
    console.log(id);
    
    this.editCustomerEvent.emit(id)

  }

}

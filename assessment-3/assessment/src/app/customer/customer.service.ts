import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomertData(){
    return this.httpClient.get(' http://localhost:3000/customer') //api call to get data from json to table
    
  }

  removeCustomerData(id:number){
    return this.httpClient.delete(`http://localhost:3000/customer/${id}`) // api call to  delete data from table
  }

  postCustomerData(data:any){
    return this.httpClient.post('http://localhost:3000/customer',data) // api call for post data from form
  }


  editCustomerDataById(id:number){
    return this.httpClient.get(`http://localhost:3000/customer/${id}`) // get customer by Id from table
  }

  editCustomer(data:any){
    return this.httpClient.put(`http://localhost:3000/customer/${data.id}`,data.formValue) // edit customer data
}


  }
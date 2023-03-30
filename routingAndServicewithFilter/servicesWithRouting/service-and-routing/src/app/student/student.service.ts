import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  deleteStudent(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }
//get data from db.json to table
  getData(){
    return this.httpClient.get('http://localhost:3000/student')
 }
 
 removeStudent(id:any){
   return this.httpClient.delete(`http://localhost:3000/student/${id}`)
 }
 // post data from form to table on the click of submit
 postData(data:any){
  return this.httpClient.post('http://localhost:3000/student',data)
}



    getById(id:any){
      return this.httpClient.get(`http://localhost:3000/student/${id}`)

    }
    updateStudent(id:any,data:any){
      return this.httpClient.put(`http://localhost:3000/student/${id}`,data)
    }
}

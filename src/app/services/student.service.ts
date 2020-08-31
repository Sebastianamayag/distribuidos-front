import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudent:Student;
  student:Student[];
  readonly URL_API='http://localhost:3000/api/students';
  constructor(private http:HttpClient) {
    this.selectedStudent=new Student();
   }

  getallStudents(){
    return this.http.get(this.URL_API);
  }

  createStudent(Student:Student){
    return this.http.post(this.URL_API,Student);
  }


}

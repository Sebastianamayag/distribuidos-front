import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';
import swal from 'sweetalert2';
declare var M:any;
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[StudentService]
})

export class StudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.studentService.selectedStudent= new Student();
    }
  }
  addStudent(form:NgForm){
    console.log(form.value);
    this.studentService.createStudent(form.value).subscribe(res=>{
      this.resetForm(form);
      M.toast({html:'Estudiante creado Satisfactoriamente....'});
      this.getStudents();
    });
  }
  getStudents(){
    this.studentService.getallStudents()
    .subscribe(res=>{
      this.studentService.student= res as Student[];
      console.log(res);
    });
  }
}

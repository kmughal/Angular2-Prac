
import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

   
import {Student} from "./Student";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 


export class AppComponent {
  students:Array<Student>;
  newStudent:Student;
  genderOptions: Array<string>;
  cn:string = "THIS VALUE IS COMING FROM PARENT";
  constructor(){
      this.students = new Array<Student>();
      this.newStudent = new Student();
      this.genderOptions = new Array<string>();
      this.genderOptions.push("Male");
      this.genderOptions.push("Female");
  }
  
  addStudent = () => {this.students.push(this.newStudent);this.newStudent = new Student();}
}

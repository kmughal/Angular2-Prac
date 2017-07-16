import { Component,Input } from '@angular/core';
import {Student} from "../Student";
import {NgFor} from '@angular/common';



@Component({
    templateUrl :'student-view.html',
    selector :'student-view'
})
export class StudentViewComponent {
    @Input() list:Array<Student>;
}
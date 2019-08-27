import { Component, OnInit } from '@angular/core';
import { StudentData } from './student-data';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {

  departments = ['IT','COMP','MECH'];
  constructor() { 

  }
  model = new StudentData(123,"Prabhakar","IT","xyz@gmail.com","sadasdsadsad");

  ngOnInit() {
  }

}

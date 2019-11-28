import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public emplist:any = [];
  public title:string="Employee List";
  constructor() {
    this.emplist = [{
      name: "kathir",
      age: 25,
      education: "BE"
    }, {
      name: "Sundar",
      age: 27,
      education: "ME"
    }, {
      name: "Gold",
      age: 40,
      education: "Phd"
    }
    ]
  }
  ngOnInit() {

  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  public name = "Rock Star";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public submit;
  displayMsg = false;
  public color = "red";
  @Input('parentData') public pname;  
  @Output() public childEventblah = new EventEmitter();
  public messageClasses= {
  "text-success": !this.hasError,
  "text-error": this.hasError,
  "text-special": this.isSpecial
  }
  public anotherStyle = {
    color: "blue",
    fontStyle: "italic"
  }

  public employees = [];
  public errorMsg = "";
  constructor(private _employeeservice : EmployeeService) {
  }

  ngOnInit() {
    //this.employees = this._employeeservice.getEmployee();
    this._employeeservice.getEmployee()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error );
  }

  displayList(){
    var text = "Your list contains 4 items.";
    return text;
  }

  onClick(event){
    this.submit= "Done";
    console.log(event);
  }

  logMessage(value){
    console.log(value);
  }

  onClick2(){
    this.childEventblah.emit("Sarita is awesome");
  }

}

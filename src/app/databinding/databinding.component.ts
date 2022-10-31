import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  name = "subhash";
  // name2= "bhivsane";
  plant = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdY1QR8lhZ0-FGD2Dop5Oyo-Zf1gr4BSVKcQuryljn_BA8atM2sTWp&usqp=CAU"
  num1 = 0
  num2 = 0;
  counter = 0;
  selectedState = "maharashtra";
  // flag:boolean= true;
  buttons: boolean = false;
  showHide: boolean = false;
  showPassword: boolean = false;
  one:number = 0;
  two : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter = this.counter + 1;
  }
  submit(data: string) {
    document.write("submit button is called...", data);
  }
  toggleParameter() {
    this.showHide = !this.showHide;
  }
  addResult: number= 0;
  addition(val1:any,val2:any){
    this.addResult= +val1 + +val2;
  }
}

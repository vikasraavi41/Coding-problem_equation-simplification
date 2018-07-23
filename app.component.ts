import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Equation Simplification';
  sampleList: any = [];
  sampleObj: any = {};




  ngOnInit() {
    this.sampleObj = {
      "op": "equal",
      "lhs": {
        "op": "add",
        "lhs": 1,
        "rhs": {
          "op": "multiply",
          "lhs": "x",
          "rhs": 10
        }
      },
      "rhs": 21
    }

  };

  calculateEquation() {
    let result;
    let transformedEquation
    let finalResult

    this.sampleList.push(this.sampleObj);
    this.sampleList.forEach(val => {
      console.log(val);

      if (val.op == "equal") {
        var equal = "=";
      }

      if (val.lhs.op == "add") {
        var add = "+";
      }
      if (val.lhs.rhs.op == "multiply") {
        var mul = "*";
      }
      //1. parse json result
      console.log("Parsed Equation is:" + val.lhs.lhs + add + "(" + val.lhs.rhs.lhs + "" + mul + "" + val.lhs.rhs.rhs + ")" + equal + "" + val.rhs);
      result = val.lhs.lhs + add + "(" + val.lhs.rhs.lhs + "" + mul + "" + val.lhs.rhs.rhs + ")" + equal + "" + val.rhs;
      alert("Parsed Equation is:" + result);

      //2. transformed  result is
      console.log("Transformed Equation is:" + val.lhs.rhs.lhs + equal + "(" + val.rhs + -  + val.lhs.lhs + ")" + "/" + val.lhs.rhs.rhs);
      transformedEquation = val.lhs.rhs.lhs + equal + "(" + val.rhs + -  + val.lhs.lhs + ")" + "/" + val.lhs.rhs.rhs;
      alert("Transformed Equation is:" + transformedEquation);
      //3. Bonus:
      val.lhs.rhs.lhs = (val.rhs - val.lhs.lhs) / val.lhs.rhs.rhs;
      console.log("The Value of x is:" + val.lhs.rhs.lhs);
      finalResult = val.lhs.rhs.lhs;
      alert("The Value of x is:" + finalResult);
    });
    
  }
  
}

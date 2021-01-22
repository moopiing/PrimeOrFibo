import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any = ""
  num: any = "";
  mode: string = "isPrime";
  options = [
    { name: "isPrime" },
    { name: "isFibonacci" }
  ]

  onChange(e) {
    this.num = Math.round(e.target.value)
    if (this.num < 0) this.num = 1
    this.checkResult(this.num)
  }

  onSelect(e) {
    this.checkResult(this.num)
  }

  checkResult(num) {
    if (this.mode == 'isPrime')
      this.result = this.isPrime(num)

    if (this.mode == 'isFibonacci')
      this.result = this.isFibonacci(num)
  }

  isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  isFibonacci(n) {
    let a = (5 * Math.pow(n, 2) + 4)
    let b = (5 * Math.pow(n, 2) - 4)
  
    let result = Math.sqrt(a) % 1 == 0,
    res = Math.sqrt(b) % 1 == 0;
  
    if (result || res == true)
      return true;
    return false;
  }
}

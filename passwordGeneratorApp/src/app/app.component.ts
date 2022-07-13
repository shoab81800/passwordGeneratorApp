import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  inputLength=0;
  includeLetters:boolean=false;
  includeNumbers:boolean=false;
  includeSymbols:boolean=false;

  onChangeLength(e:any){
    const parsedVal = parseInt(e.target.value);
    if(!isNaN(parsedVal)){
      this.inputLength = parsedVal;
      console.log(this.inputLength);
    }
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onButtonClicked(){
    const Numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'

    let ValidChars='';

    if  (this.includeLetters){
      ValidChars += letters;
    }
    if  (this.includeNumbers){
      ValidChars += Numbers;
    }
    if  (this.includeSymbols){
      ValidChars += symbols;
    }

    let generatedPass='';
    for(let i=0; i < this.inputLength; i++){
      const index = Math.floor(Math.random()* ValidChars.length);
      generatedPass += ValidChars[index];
    }
    this.password = generatedPass;
    
  }
}

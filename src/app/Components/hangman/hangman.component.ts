import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  targetWord: Array<string> = new Array();

  buttons = Array(26).fill(false);
  newWord: string[] = [];

  counter: number = 5;
  word: any;

  categories = [
    {name:'animal', values:["pig", "dog", "monkey", "tiger", "zebra", "cat", "eagle", "bird", "snake", "turtle"]},
    {name:'city',values:["tokyo", "berlin", "london", "paris", "chicago", "new york", "melbourne"]},
    {name:'color',values:["blue", "orange", "black", "white", "purple", "green", "yellow"]}
  ]
  constructor() {

  }

  ngOnInit(): void {
    this.targetWord = this.generateRandomWord().split('');
    this.newWord = new Array(this.targetWord.length);

    for(let i=0;i<this.targetWord.length;++i){
      if(this.targetWord[i]==' '){
        this.newWord[i]=' ';
      }
    }
    console.log(this.targetWord);
  }

  guessLetter(letter: string) {
    let found=false;
    for (let i=0; i<this.targetWord.length; i++) {
      if (letter.toLowerCase() == this.targetWord[i] ) {
        this.newWord[i] = this.targetWord[i];
        found=true;
      }
    }
    if(!found) {
      if (this.counter <= 1)
      {
        alert("U LOST");
        this.counter = 0
        this.buttons = Array(26).fill(true)
      }
      else
      {
        --this.counter;
      }
    }

    if(this.arraysAreEqual(this.targetWord, this.newWord)){
      alert("You won");
      this.buttons = Array(26).fill(true)
    }
    
  }

  generateRandomWord() {
    let rndCategorie = Math.floor(Math.random()* this.categories.length);
    let rndVal = Math.floor(Math.random()* this.categories[rndCategorie].values.length);
    let currentWord = this.categories[rndCategorie].values[rndVal];
  
    this.word = this.categories[rndCategorie];
    return currentWord;
  }

  arraysAreEqual (a: Array<string>,b: Array<string>) {
    if (a === b) return true;
    for (let i=0; i<a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

}

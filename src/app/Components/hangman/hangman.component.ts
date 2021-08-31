import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  animals = ["pig", "dog", "monkey", "tiger", "zebra", "cat", "eagle", "bird", "snake", "turtle"];
  targetAnimal: Array<string> = new Array();

  buttons = Array(26).fill(false);
  newAnimal: string[] = [];

  counter: number = 5;
  constructor() {

  }

  ngOnInit(): void {
    this.targetAnimal = this.generateAnimal().split('');
    this.newAnimal = new Array(this.targetAnimal.length);
    console.log(this.targetAnimal);
  }

  guessLetter(letter: string) {
    let found=false;
    for (let i=0; i<this.targetAnimal.length; i++) {
      if (letter.toLowerCase() == this.targetAnimal[i]) {
        this.newAnimal[i] = this.targetAnimal[i];
        found=true;
      }
    
    }
    if(!found) {
      if (this.counter == 0)
      {
        alert("U LOST");
        this.counter = 0
      }
      else
      {
        --this.counter;
      }
    }
    
  }

  generateAnimal() {
    let currentAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];
    return currentAnimal;
  }


}

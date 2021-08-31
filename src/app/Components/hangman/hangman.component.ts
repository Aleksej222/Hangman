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
  targetLetter: string = "";

  buttons = Array(26).fill(false);

  

  isMatching = false;
  newAnimal: string[] = [];
  constructor() {

  }

  ngOnInit(): void {
    this.targetAnimal = this.generateAnimal().split('');
    this.newAnimal = new Array(this.targetAnimal.length);
    console.log(this.targetAnimal);
  }

  guessLetter(letter: string) {
    for (let i=0; i<this.targetAnimal.length; i++) {
      if (letter.toLowerCase() == this.targetAnimal[i]) {
        this.newAnimal[i] = this.targetAnimal[i];
      }
    }

    console.log(this.newAnimal)
  }

  generateAnimal() {
    let currentAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];
    return currentAnimal;
  }


}

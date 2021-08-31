import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  animals = ["pig", "dog", "monkey", "tiger", "zebra", "cat", "eagle", "bird", "snake", "turtle"];
  targetAnimal: string = "";
  targetLetter: string = "";

  buttons = Array(26).fill(false);
  guess: string = "";
  newGuess: any = [];
  newAnimal: any = [];

  isMatching = false;
  constructor() {

  }

  ngOnInit(): void {
    this.targetAnimal = this.generateAnimal()
    console.log(this.targetAnimal);
  }

  guessLetter(letter: string) {
    this.newAnimal = this.targetAnimal.split('');
    console.log(this.newAnimal);

    for (let i = 0; i < this.newAnimal.length; i++) {
      if (letter.toLowerCase() == this.newAnimal[i]) {
        this.guess += letter.toLowerCase();
        this.isMatching = true;
      }
    }

    this.newGuess = this.guess.split('');
    this.newGuess = this.newGuess.sort((a: any, b: any) => {
      return this.newAnimal.indexOf(a) - this.newAnimal.indexOf(b);
    });
    console.log(this.newGuess);

  }

  generateAnimal() {
    let currentAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];
    return currentAnimal;
  }


}

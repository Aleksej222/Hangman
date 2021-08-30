import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  animals = ["pig", "dog", "monkey", "tiger", "zebra", "cat", "eagle", "bird", "snake", "turtle"];
  targetAnimal:string="";
  targetLetter:string = "";

  constructor() {

  }

  ngOnInit(): void {
    this.targetAnimal=this.generateAnimal()
  }

  guessLetter(letter: string): string {
    // console.log(letter)
    return this.targetLetter = letter;
  }

  generateAnimal() {
    
  let randomNumber = Math.floor((Math.random() * 10) + 1);
  let currentAnimal = this.animals[randomNumber];

  console.log(currentAnimal);
  return currentAnimal;
  }
  
  isMatching(letter: string) {
    let newAnimal = [];
    let animalLength = this.targetAnimal.length
   

    for(let i=0; i<animalLength; i++) {
      this.targetLetter = this.guessLetter(letter);
      console.log(letter);
    }
  }
}

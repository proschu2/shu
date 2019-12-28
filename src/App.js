import React from "react";
import SpecialWord from "./SpecialWord";
import words from './WordsDatabase'
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.initialNumber = Math.floor(Math.random() * words.length)
    this.state = {
      word: words[this.initialNumber].word,
      language: words[this.initialNumber].language,
      meaning: words[this.initialNumber].meaning,
    };
  }
  randomWord() {
    const randomNumber = Math.floor(Math.random() * words.length);
    return words[randomNumber].word !== this.state.word ? words[randomNumber] : this.randomWord();
    
  }
  shuffleWords(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomWord = this.randomWord();
    this.setState({
      word: generateRandomWord.word,
      language: generateRandomWord.language,
      meaning: generateRandomWord.meaning
    });
    this.shuffleWords(words)
  };

  handleEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.handleClick();
    }
  }

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <div>
        <SpecialWord
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          handleEnter={this.handleEnter}
          {...this.state}
        />
        <p id="dedication">per la mia pupina bella<span aria-hidden="true" role="img">🦔</span></p>
      </div>
    );
  }
}

export default App;
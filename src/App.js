import React from "react";
import SpecialWord from "./SpecialWord";
import words from './WordsDatabase'
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.secs = new Date().getSeconds()
    this.state = {
      word: words[this.secs].word,
      language: words[this.secs].language,
      meaning: words[this.secs].meaning,
    };
  }
  randomWord() {
    const randomNumber = Math.floor(Math.random() * words.length);
    return words[randomNumber];
    
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
          {...this.state}
        />
        <p id="dedication">per la mia pupina bella<span aria-hidden="true" role="img">🦔</span></p>
      </div>
    );
  }
}

export default App;
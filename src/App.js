import React from "react";
import SpecialWord from "./SpecialWord";
import LanguageSwitcher from "./LanguageSwitcher";
import detectBrowserLanguage from "detect-browser-language";
import "./App.css";
import words from "./words";

class App extends React.Component {
  constructor() {
    super();
    this.initialNumber = Math.floor(Math.random() * words.length);
    const siteLang = detectBrowserLanguage().includes("it") ? "IT" : "EN";
    this.state = {
      siteLang,
      word: words[this.initialNumber].word,
      language: words[this.initialNumber][`language${siteLang}`],
      meaning: words[this.initialNumber][`meaning${siteLang}`],
    };
  }
  randomWord() {
    const randomNumber = Math.floor(Math.random() * words.length);
    return words[randomNumber].word !== this.state.word
      ? words[randomNumber]
      : this.randomWord();
  }
  shuffleWords(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  handleClick = (lang, newLang=null) => {
    const generateRandomWord = this.randomWord();
    this.setState({
      word: generateRandomWord.word,
      language: generateRandomWord[`language${newLang ?? this.state.siteLang}`],
      meaning: generateRandomWord[`meaning${newLang ?? this.state.siteLang}`],
    });
    this.shuffleWords(words);
  };

  handleEnter = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      this.handleClick();
    }
  };

  handleChangeLanguage = () => {
    const newLang = this.state.siteLang === "EN" ? "IT" : "EN";
    const generateRandomWord = this.randomWord();
    this.setState({
      siteLang: newLang,
      word: generateRandomWord.word,
      language: generateRandomWord[`language${newLang}`],
      meaning: generateRandomWord[`meaning${newLang}`],
    });
    setTimeout(this.handleClick('',newLang), 500);
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 175)},
      ${Math.floor(Math.random() * 175)},
      ${Math.floor(Math.random() * 175)})`;
    return color;
  }

  render() {
    return (
      <div className="container">
        <LanguageSwitcher
          handleChangeLanguage={this.handleChangeLanguage}
          siteLang={this.state.siteLang}
        />
        <SpecialWord
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          handleEnter={this.handleEnter}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;

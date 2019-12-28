import React from "react";

class SpecialWord extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;
    document.addEventListener('keydown',this.props.handleEnter)

    return (
      <div style={{ backgroundColor: "white" }} className="wordbox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="word">{this.props.word}</h1>
          <h3 id="language">{this.props.language}</h3>
          <h5 id="meaning">
            {this.props.meaning}
          </h5>
        
        <button
          style={{ backgroundColor: randomColor }}
          id="newword"
          onClick={this.props.handleClick}
        >
          Genera
        </button>
        </div>
      </div>
    );
  }
}

export default SpecialWord;
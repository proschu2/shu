import React from "react";

class LanguageSwitcher extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: "30px",
          borderRadius: "50%",
        }}
      >
        <img
          src={`./${this.props.siteLang === "EN" ? "IT" : "EN"}.png`}
          style={{ height: "24px" }}
          onClick={this.props.handleChangeLanguage}
          alt=""
        />
      </div>
    );
  }
}

export default LanguageSwitcher;

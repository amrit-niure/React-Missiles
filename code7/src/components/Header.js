import React from "react";

function Header() {
  return (
    <header className="head">
      <div className="logo">
        <img src="troll-face.png" alt="" className="troll-image" />
        <div className="meme-generator">
          <h2 className="h1meme">Meme Generator</h2>
        </div>
      </div>
      <div className="header-text">
        <h4 className="project3">React Course - Project 3</h4>
      </div>
    </header>
  );
}

export default Header;

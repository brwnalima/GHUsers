import React, { useState } from "react"
import "./Card.css"

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="face front">
        <img src={props.avatarUrl} alt={props.name} />
        <h2>{props.name}</h2>
        <div className="stats">
          <div className="stat">
            <span>{props.followers}</span>
            <span>Followers</span>
          </div>
          <div className="stat">
            <span>{props.stars}</span>
            <span>Stars</span>
          </div>
        </div>
      </div>
      <div className="face back">
        <p>{props.bio}</p>
        <div className="stats">
          <div className="stat">
            <span>{props.publicRepos}</span>
            <span>Public Repos</span>
          </div>
        </div>
        <a href={props.htmlUrl} target="_blank" rel="noopener noreferrer">
          Go to GitHub
        </a>
      </div>
    </div>
  );
}

export default Card
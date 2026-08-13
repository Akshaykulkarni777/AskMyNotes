// import { useState } from "react";

// function LikeCounter() {
//   //State is set
//   const [likes, setLikes] = useState(0);

//   function handleLike() {
//     /*Write code her */
//     setLikes(likes + 1);//Update State
//   }

//   function handleUnlike() {
//     if (likes > 0) {
//       setLikes(likes - 1);
//     }
//   }

//   function handleReset() {
//     setLikes(0);
//   }

//   return (
//     <div className="like-counter">
//       <h2>React State Practice</h2>

//       <h3>Likes: {likes}</h3>

//       <button onClick={handleLike}>Like</button>
//       <button onClick={handleUnlike}>Unlike</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default LikeCounter;

import React, { useState } from "react";

function LikeCounter() {
  // State is set
  const [likes, setLikes] = useState(0);

  // Increase likes
  function handleLike() {
    setLikes(likes + 1);
  }

  // Decrease likes
  function handleUnlike() {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }

  // Reset likes to 0
  function handleReset() {
    setLikes(0);
  }

  return (
    <div className="like-counter" style={styles.container}>
      <h2>like and unlike game</h2>

      <h3>Likes: {likes}</h3>

      <button onClick={handleLike} style={styles.button}>
        Like
      </button>

      <button onClick={handleUnlike} style={styles.button}>
        Unlike
      </button>

      <button onClick={handleReset} style={styles.button}>
        Reset
      </button>
    </div>
  );
}

// Simple styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LikeCounter;
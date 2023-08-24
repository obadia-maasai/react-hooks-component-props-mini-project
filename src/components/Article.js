import React from 'react';

function Article({ title, date = "January 1, 1970", preview }) {
  // Calculate the number of coffee cup or bento box emojis based on the time
  const minutesToRead = Math.ceil((new Date(date) - new Date("January 1, 1970")) / 60000); // Convert milliseconds to minutes
  const coffeeCups = "☕️".repeat(Math.ceil(minutesToRead / 5));
  const bentoBoxes = "🍱".repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{minutesToRead <= 30 ? coffeeCups : bentoBoxes} {minutesToRead} min read</small>
    </article>
  );
}

export default Article;

import React from "react";

const Today = (props) => {

  let date = new Date()

  let day = date.getDate()
  let month = date.toLocaleDateString('en-US', { month: 'long' })
  let year = date.getFullYear()

  return (
    <span className="today">{day} {month} {year}</span>
  );
}

export default Today
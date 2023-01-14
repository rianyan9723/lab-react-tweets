import React from "react";

const Message = (props) => {
  return (
    <p className="message">{ props.tweet.message }</p>
  );
};

export default Message;
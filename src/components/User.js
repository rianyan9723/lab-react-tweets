import React from "react";

const User = (props) => {
  console.log('User-user' + props.tweet.userData.name)
  return (
    <span className="user">
      <span className="name">{props.tweet.userData.name}</span>
      <span className="handle">@{props.tweetuserData.handle}</span>
    </span>
  );
};

export default User;
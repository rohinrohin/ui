import React from "react";
import Avatar from 'react-avatar';

export default function topCard({ username, lastPoints, totalPoints }) {
  return (
    <div style={{color: "#9E8DD1"}} className="m-4 h-32 w-20 flex flex-col items-center justify-between border-4 border-light-purple rounded-3xl text-white">
      <div className="w-full text-center  text-green-500 text-xl">{totalPoints}</div>
      <Avatar name={username} round="10px" size="35px" />
      <div className="w-full text-center text-xl font-bold">{username}</div>
      <div className="w-full text-center text-green-300 text-lg">+{lastPoints}</div>
    </div>
  );
}

import React from "react";
import Buttons from "../Button";

export default function DataCard({ post,postDelete,postUpdate }) {
  const { title,id } = post;

  return (
    <div className="display">
      <li>{title}</li> 
      <div className='buttons'>
        <Buttons color='primary' oncilck={postUpdate(post)} text='update'/>
        <Buttons color='secondary' oncilck={postDelete(id)} text='delete'/>
      </div>
    </div>
  );
}

import React from 'react'
import Button from '@material-ui/core/Button';

const Buttons = ({ oncilck, text, type, className, color }) => {

  return (
    <Button style={{margin:'2px'}}type={type} variant="contained" className={className} color={color} onClick={oncilck}>
      {text}
    </Button>
  )
}

export default Buttons;
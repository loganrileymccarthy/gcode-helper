import './OutputBox.css';
import React from 'react';
import { Box } from '@mui/material';

export default function OutputBox({text=''}) {
  
  return (
     
      <textarea 
      placeholder={'[output]'}
      value={text}
      spellCheck={false}
      />
   

  )
}

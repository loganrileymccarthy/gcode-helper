import './TextFields.css';
import {Box, TextField, InputLabel, FormControl, OutlinedInput} from '@mui/material';

export default function TextFields({input1='', input2='', input3='', input4='', handleChange1, handleChange2, handleChange3, handleChange4}) {
  return (
    <div id="Upper">
      <div id="Section">
        <div id="Entry">
          <p>OLD<br/>TOOL</p> 
          <input
          size="4"
          type="normal"
          value = {input1}
          onChange = {handleChange1} />
        </div>
        <div id="Entry">
          <p>NEW<br/>TOOL</p> 
          <input 
          size="4"
          type="normal"
          value = {input2}
          onChange = {handleChange2} />
        </div>
        <div id="Entry">
          <p>OLD<br/>ZONE</p> 
          <input 
          size="4"
          type="normal"
          value = {input3}
          onChange = {handleChange3} />
        </div>
        <div id="Entry">
          <p>NEW<br/>ZONE</p> 
          <input 
          size="4"
          type="normal"
          value = {input4}
          onChange = {handleChange4} />
        </div>
      </div>
      <div id="Section">
      </div>

    </div>
 )
}

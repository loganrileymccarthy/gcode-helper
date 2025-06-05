import './TextFields.css';
import {Box, TextField, InputLabel, FormControl, OutlinedInput} from '@mui/material';

export default function TextFields({input1='', input2='', handleChange1, handleChange2}) {
  return (
    <Box display="flex" flexDirection={'row'} width={'100%'} >
    <FormControl sx={{ m: 0, width: '10ch' }} variant="outlined">
      <InputLabel htmlFor='display-name'>Old Tool:</InputLabel>
        <OutlinedInput id="field1" type="number"
          value = {input1}
          onChange = {handleChange1} />
    </FormControl> 
    <FormControl sx={{ m: 0, width: '10ch' }} variant="outlined">
      <InputLabel htmlFor='display-name'>New Tool</InputLabel>
        <OutlinedInput id="field2" type="number"
          defaultValue = {"0"}
          value = {input2}
          onChange = {handleChange2} />
    </FormControl>
    </Box>
  )
}

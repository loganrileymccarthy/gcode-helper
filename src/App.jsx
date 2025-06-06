import { React, useState } from 'react';

import './App.css';
import {Container, Box, Button} from '@mui/material';

import InputBox from './components/InputBox.jsx';
import OutputBox from './components/OutputBox.jsx';
import Title from './components/Title.jsx';
import Footer from './components/Footer.jsx';
import TextFields from './components/TextFields.jsx'

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [param3, setParam3] = useState('');
  const [param4, setParam4] = useState('');


    function getComments(str) {
      const regex = /\(([^)]*)\)/;
      const match = str.match(regex);
      return match ? match[1] : '';
  }
    function getNumberAfterChar(str, char) {    
      //int version
      const index = str.indexOf(char);
      if (index === -1) {
        return '';  //no code
      }
      const substr = str.substring(index + char.length);
      const n = parseInt(substr);
      if (isNaN(n)) {
        return '';  //code with no number
      }
      return n;
  }
    function getFloatAfterChar(str, char) {     
      //float version
      const index = str.indexOf(char);
      if (index === -1) {
        return '';  //no code
      }
      const substr = str.substring(index + char.length);
      const n = parseFloat(substr);
      if (isNaN(n)) {
        return '';  //code with no number
      }
      return n;
  }
    function clean(str) {
      //initial clean up
      str = str.replace(/\s/g, '');             //whitespace
      str = str.replace(/\([\s\S]*?\)/g, '');   //comments
      str = str.toUpperCase();                  //capitalize
      
      //ignoring these
      if (str.includes('IF')) str = '';
      if (str.includes('WHILE')) str = '';

      //handle T01 etc
      if (str.includes('T0')) str = str.replace('T0', 'T');
      if (str.includes('N0')) str = str.replace('N0', 'N');
      if (str.includes('H0')) str = str.replace('H0', 'H');
      if (str.includes('D0')) str = str.replace('D0', 'D');

      return str;
  }
    function search(str) {
      //replace codes

      if (getFloatAfterChar(str, 'T') == param1) {
        let n = getFloatAfterChar(str, 'T');
        str = str.replace('T'+n, 'T'+param2);
      }
      if (getFloatAfterChar(str, 'N') == param1) {
        let n = getFloatAfterChar(str, 'N');
        str = str.replace('N'+n, 'N'+param2);
      }
      if (getFloatAfterChar(str, 'H') == param1) {
        let n = getFloatAfterChar(str, 'H');
        str = str.replace('H'+n, 'H'+param2);
      }
      if (getFloatAfterChar(str, 'D') == param1) {
        let n = getFloatAfterChar(str, 'D');
        str = str.replace('D'+n, 'D'+param2);
      }
      if (getFloatAfterChar(str, 'G') == param3) {
        let n = getFloatAfterChar(str, 'G');
        str = str.replace('G'+n, 'G'+param4);
      }
      return str;
  }
    function outputFunction(text) {
      var output = '';
      var a = text.split(/\r?\n/);   //split section by line
      var o = a.map(item => {return {text: item};});
      o.forEach(line => {
        line.comments = '';
        line.comments += getComments(line.text);
        line.text = clean(line.text);
        line.text = search(line.text);
        
        output += line.text;
        if (line.comments.length > 1) output += '(' + line.comments + ')';
        output += '\n';
      });

      return output;
  }

    const handleInputInteraction = (event) => {setInputText(event.target.value);}
    const handleUpload = () => {setOutputText(outputFunction(inputText));}
    const handleParamChange1 = (event) => {setParam1(event.target.value);}
    const handleParamChange2 = (event) => {setParam2(event.target.value);}
    const handleParamChange3 = (event) => {setParam3(event.target.value);}
    const handleParamChange4 = (event) => {setParam4(event.target.value);}

  return (
    <div className="App">
    <>
    <Container maxWidth={false} disableGutters sx={{bgcolor: 'lightsteel', height: '30px'}}>
      <Box display="flex" flexDirection={'row'} justifyContent={'center'}>
        <Title/>
      </Box>
    </Container>
      
    <Container maxWidth={false} disableGutters sx={{ bgcolor: 'lightsteel', height: 'calc(100vh - 80px)'}}>
      <Box display="flex" flexDirection={'column'} height={'100%'}>
        
        <TextFields 
          input1 = {param1}
          input2 = {param2}
          input3 = {param3}
          input4 = {param4}
          handleChange1 = {handleParamChange1}
          handleChange2 = {handleParamChange2}
          handleChange3 = {handleParamChange3}
          handleChange4 = {handleParamChange4}
        /> 
        
        <Box display="flex" flexDirection={'row'} height={'100%'}>
        
          <Box display="flex" flexDirection = {'column'} height={'100%'} width={'50%'}>
            <InputBox text = {inputText} handleChange = {handleInputInteraction}/>
            <Button variant='contained' color='primary' onClick = {handleUpload}>UPLOAD</Button>
          </Box>

          <Box display="flex" flexDirection={'column'} height={'100%'} width={'50%'}>
            <OutputBox text={outputText}/>
          </Box>

        </Box>

      </Box>
    </Container>

    <Container maxWidth={false} disableGutters sx={{bgcolor: 'lightsteel', height: '30px'}}>
      <Box display="flex" flexDirection={'row'} justifyContent={'right'}>
        <Footer/>
      </Box>
    </Container>
    </>
    </div>
  )
}

export default App;

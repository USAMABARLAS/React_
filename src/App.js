import React from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import EmailComponent from './components/eMailComponent';
import Mybutton from "./components/Mybutton"
import Progress from './components/Progress';


const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <EmailComponent />
      <Mybutton />
      <Progress />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;

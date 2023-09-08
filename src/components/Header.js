import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Progress';

function Header() {
  return (
    <Wrapper>
      <h1>
        <label className='' for="email">Please Enter Your Emails</label>
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  // background-color: #24292e;
  // color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export default Header

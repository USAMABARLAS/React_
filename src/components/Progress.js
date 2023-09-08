import React from 'react'
import styled from 'styled-components'

const ProgressComponent = () => {
  return (
    <Wrapper>

      <Progress value={50} max={100} />
  
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  text-align: center;
`;

const Progress = styled.progress`
  font-size: 50px
`;

export default ProgressComponent

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
function EmailComponent() {
    return (
        <Wrapper>
            
            <textarea id="emails" name="email" rows="10" cols="101">
            </textarea>


        </Wrapper>
    )
}

const Wrapper = styled.div`
  color: #ffffff;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default EmailComponent

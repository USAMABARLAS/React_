import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function SubmitButton({ onSmash }) {
    return (
        <Button onClick={() => alert("Click")}>
            Submit
        </Button>

    );
}

const Button = styled.div`
background-color: Green;
  color: #000;
  padding: 16px;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
margin: 0 auto
`;

export default SubmitButton

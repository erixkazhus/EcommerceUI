import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`;

const Announcement = () => {
  return (
    <Container>
        Super pupper
    </Container>
  )
}

export default Announcement

import React from 'react';
import styled from "styled-components";



export const Wrapper = styled.section`
  margin: 0 auto;  

  width: 80vw;
  padding-right: 30px
`;

function Profile() {
  return (
    <Wrapper>
        <div>TESTE PROFILE</div>
    </Wrapper>
  );
}

export default Profile;
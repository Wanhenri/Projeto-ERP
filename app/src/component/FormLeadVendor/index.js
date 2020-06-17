import React, { useState } from "react";
import styled from 'styled-components';
import InputData from "../../object/Inputdata";
import Btn from "../../object/Btn";
import {Card} from '../../object/Card'
import { Strong } from "../../object/Strong";

export const Wrapper = styled.section`
  margin-top: 85px;
`;

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  justify-content: center;

`;

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form``;

const FormLeadVendor = props => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Card style={{ maxWidth: 470, marginTop: 60 }}>
      <Strong>VENDOR</Strong>
      <Form>
          <Wrapper>
              <Container>
                  <ContainerColumn>
                      <InputData  
                        style={{marginLeft: 47}}                    
                        placeholder="Name"
                      />
                      <InputData  
                        style={{marginTop: 3, marginLeft: 47}}                    
                        placeholder="CNPJ"
                      />
                      <InputData
                        style={{marginTop: 3, marginLeft: 47}}
                        placeholder="City"
                      />
                  </ContainerColumn>
                  <Btn
                    style={{marginTop: 3, marginLeft: 47}}
                  >
                    {loading ? "Adding..." : "Add"}
                  </Btn>
              </Container>            
          </Wrapper>
      </Form>
    </Card>
  );
};

export default FormLeadVendor;
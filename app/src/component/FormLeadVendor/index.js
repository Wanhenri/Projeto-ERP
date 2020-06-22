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

export const Label = styled.label`
  margin-left: 47px
`;


export const Form = styled.form``;

const FormLeadVendor = (props) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [city, setCity] = useState("");

  return (
    <Card style={{ maxWidth: 470, marginTop: 60 }}>
      <Strong>VENDOR</Strong>
      <Form>
          <Wrapper>
              <Container>
                  <ContainerColumn>
                      <Label>Full Name</Label>
                      <InputData  
                        style={{marginLeft: 47}}                    
                        placeholder="Full Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      <Label>CNPJ</Label>
                      <InputData  
                        style={{marginTop: 3, marginLeft: 47}}                    
                        placeholder="00.000.000/0000-00"
                        value={cnpj}
                        onChange={e => setCnpj(e.target.value)}
                      />
                      <Label>City</Label>
                      <InputData
                        style={{marginTop: 3, marginLeft: 47}}
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      />
                  </ContainerColumn>
                  <Btn
                    style={{marginTop: 3, marginLeft: 47}}
                    onClick={event => {
                      event.preventDefault();
                      setLoading(true);
                      props.onSubmit(name,cnpj,city, () => {
                        setLoading(false);
                      });
                    }}
                  >
                    {loading ? "Adding..." : "Add Vendor"}
                  </Btn>
              </Container>            
          </Wrapper>
      </Form>
    </Card>
  );
};

export default FormLeadVendor;
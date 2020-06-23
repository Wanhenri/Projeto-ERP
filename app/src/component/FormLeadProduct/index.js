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

export const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  margin-left: 47px
`;


export const Form = styled.form``;

const FormLeadProduct = props => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");

  function refreshPage(){ 
    window.location.reload(); 
}


  return (
    <Card style={{ maxWidth: 470, marginTop: 60 }}>
      <Strong>PRODUCT</Strong>
      <Form>
          <Wrapper>
              <Container>
                  <ContainerColumn>
                      <Label>Product</Label>
                      <InputData  
                        style={{marginLeft: 47}}                    
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      <Label>Code</Label>
                      <InputData  
                        style={{marginTop: 3, marginLeft: 47}}                    
                        placeholder="Code"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                      />
                      <Label>Price</Label>
                      <InputData
                        style={{marginTop: 3, marginLeft: 47}}
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                      />
                  </ContainerColumn>
                  <Btn
                    style={{marginTop: 3, marginLeft: 47}}
                    onClick={event => {
                      event.preventDefault();
                      setLoading(true);
                      props.onSubmit(name,code,price, () => {
                        setLoading(false);
                      });
                    refreshPage();
                    }}
                  >
                    {loading ? "Adding..." : "Add Product"}
                  </Btn>
              </Container>            
          </Wrapper>
      </Form>
    </Card>
  );
};

export default FormLeadProduct;
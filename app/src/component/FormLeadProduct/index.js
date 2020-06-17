import React, { useState } from "react";
import styled from 'styled-components';
import InputData from "../../object/Inputdata";
import Btn from "../../object/Btn";

export const Wrapper = styled.section`
  margin-top: 85px;
`;

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  justify-content: center;

`;

export const ContainerInput = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form``;

const FormLeadProduct = props => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Form>
        <Wrapper>
            <Container>
                <ContainerInput>
                    <InputData
                      
                      placeholder="teste"
                    />
                    <InputData
                      style={{marginTop: "3px"}}
                      placeholder="teste"
                    />
                </ContainerInput>
                <Btn
                  style={{marginTop: "3px"}}
                >
                  {loading ? "Buscando..." : "Buscar"}
                </Btn>
            </Container>            
        </Wrapper>
    </Form>
  );
};

export default FormLeadProduct;
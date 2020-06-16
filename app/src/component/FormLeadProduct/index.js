import React, { useState } from "react";
import styled from 'styled-components';
import InputData from "../../object/Inputdata";
import Btn from "../../object/Btn";

export const Wrapper = styled.section`
  margin-top: 85px;
`;

export const Container = styled.section`
  width: 100%;
  margin: 10px auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

`;

export const Form = styled.form``;

const FormLead = props => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Form>
        <Wrapper>
            <Container>
                <InputData
                  placeholder="Cidade desejada"
                />
                <InputData
                  placeholder="Cidade desejada"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Btn
                >
                  {loading ? "Buscando..." : "Buscar"}
                </Btn>
            </Container>            
        </Wrapper>
    </Form>
  );
};

export default FormLead;
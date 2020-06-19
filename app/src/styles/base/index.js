import { createGlobalStyle} from "styled-components";

const Base = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body{  
        font-size:var(--size-base);      
        font-family: 'Roboto Slab', serif; /* font dos textos */
    }
    h1{
        font-family: 'Fjalla One', sans-serif; /*font do titulo*/
        color: var(--color-base);
    }
    h2{
        font-family: 'Khula', sans-serif; /*font do subtitle*/        
        color: var(--color-negative-light);
    }
    input {
        font-family:inherit;
        font-size: inherit;
    }
    ul {
        list-style-type: none;
    }
`;


export default Base;
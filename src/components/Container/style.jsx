import styled from "styled-components";

export const ContainerEstilizado = styled.div`

width: 50%;
height: 100%;
background-color: var(--fundo);
padding: 1em;
border-radius: 10px;
margin-top: 3em;
margin-left: 2em;

p {
    margin-top: 1em;
}

h2 {
    font-size: 1em;
    width: 50%;
    margin-top: 1.5em;
    
}

@media screen and (max-width: 1024px) {

    width: 100%;
    margin: 2em 0 0 0;

}

`
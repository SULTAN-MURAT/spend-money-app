import styled from 'styled-components';
  
const color="#07a467";
export const StyledButton = styled.div`
   position: fixed; 
   width: 100%;
   left: 90%;
   right:10%;
   bottom: 40px;
   height: 50px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: ${color};
   border:2px solid ${color};
`
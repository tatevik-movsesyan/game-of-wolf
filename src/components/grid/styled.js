import styled from "styled-components";

export const GridsWrapper = styled.div`
display: flex;
width: 450px;
height: 450px;
flex-direction: column;
align-items: center;
margin:50px;
`
export const ButtonWrapper = styled.div`
flex-direction: row;
margin: 20px;
`


// export const Grids = styled.div`
// display: flex;
// justify-content: center;
// ${props =>
//   `width:` +props.size * 50+`px;
//   height:` +props.size * 50+`px;`
// }
// margin: 50px;
// `
// export const DivRow = styled.div`
// width: 100%;
// height: 50px;
// flex-direction: row;
// `
// export const DivColumn = styled.div`
// border: 1px solid black;
// width: 50px;
// height: 50px;
// flex-direction: column;
// `
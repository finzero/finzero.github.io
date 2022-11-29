import styled from 'styled-components';

interface IDivProp {
  size: number;
}

const FontSize = styled.div`
  font-size: ${(props: IDivProp) => props.size + 'px'};
`;

export default FontSize;

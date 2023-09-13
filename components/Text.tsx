import styled from 'styled-components';

type textAlign = 'right' | 'left';

interface IDivProp {
  size: number;
  color: string;
  fontWeight: number | string;
  margin: string;
  padding: string;
  textAlign: textAlign;
}

const Text = styled.div`
  font-size: ${(props: Partial<IDivProp>) => props.size + 'px'};
  font-weight: ${(props: Partial<IDivProp>) => props.fontWeight};
  color: ${(props: Partial<IDivProp>) => props.color};
  margin: ${(props: Partial<IDivProp>) => props.margin};
  padding: ${(props: Partial<IDivProp>) => props.padding};
  text-align: ${(props: Partial<IDivProp>) => props.textAlign};
`;

export default Text;

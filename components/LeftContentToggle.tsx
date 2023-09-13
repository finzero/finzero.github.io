import styled from 'styled-components';

const LeftContentToggle = ({
  onClick,
  show,
}: {
  onClick: React.MouseEventHandler;
  show: boolean;
}) => {
  return (
    <StyledLeftContentToggle
      onClick={onClick}
      show={show}
    ></StyledLeftContentToggle>
  );
};

const StyledLeftContentToggle = styled.div`
  text-align: right;
  padding-right: 15px;
  font-size: 30px;
  background: #000000;
  visibility: hidden;
  &:after {
    content: '${({ show }: { show: boolean }) =>
      show ? '\\00AB' : '\\00BB'} ';
  }
  @media (max-width: 425px) {
    visibility: visible;
    cursor: pointer;
  }
`;

export default LeftContentToggle;

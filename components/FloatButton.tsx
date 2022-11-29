import styled from 'styled-components';

const FloatButton = styled.div`
  z-index: 2;
  position: fixed;
  top: 10px;
  right: 10px;
  height: 50px;
  line-height: 50px;
  padding: 0px 10px;
  border-radius: 100px;
  border: 1px solid #000000;

  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 4s ease-in-out infinite;
  background: #000000;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`;

export default FloatButton;

import styled from "styled-components";

export const PokeName = styled.p`
  color: #ffffff;
  text-shadow: 2px 2px 2.5px gray;
  font-family: joystix;
  margin: 0 auto;
  margin-top: 13px;
  margin-bottom: 8px;
  text-align: center;
  font-size: small;
`;

export const AddAndRemoveButton = styled.button`
  width: 60px;
  background-color: transparent;
  border: none;
  color: #008000;
  cursor: pointer;
  :hover {
    color: #ffffff;
    transform: scale(1.2);
    transition: all 0.3s ease 0s;
  }
`;

export const DetailsButton = styled.button`
  width: 60px;
  background-color: transparent;
  border: none;
  color: #4869a2;
  cursor: pointer;
  :hover {
    color: #ffffff;
    transform: scale(1.2);
    transition: all 0.3s ease 0s;
  }
`;

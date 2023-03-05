import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 10px;
`;

export const Label = styled.label`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 10px;
  align-self: center;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #606060;
    color: white;
    border: none;
  }
`;

import styled from "styled-components";

export const ListFrame = styled.div`
  width: 100%;
  max-width: 275px;
  background-color: white;
  margin: 0 auto;
  box-shadow: 0.5px 0.5px 5px gray;
  margin-bottom: 15px;
  max-height: 440px;
  overflow-y: auto;

  ul {
    padding: 0;
  }
`;

export const TaskListButton = styled.button`
  text-align: center;

  width: 100%;
  height: 40px;
  max-width: 130px;
  border-radius: 100px;

  color: white;
  background-color: #af7eeb;
  border-color: transparent;
  box-shadow: 0.5px 0.5px 5px gray;
  font-weight: bold;

  &:hover {
    background-color: #7E48C0;
  }
`;

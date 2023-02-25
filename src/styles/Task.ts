import styled from "styled-components";

interface TaskFrameProps {
  disabled: boolean;
}

export const TaskFrame = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-inline: 20px;
  justify-content: center;
  gap: 20px;
`;

export const TaskTextInput = styled.input<TaskFrameProps>`
  border-style: none none solid none;
  border-color: #acacaca4;
  width: 150px;

  text-decoration: ${(props) => (props.disabled ? "line-through" : "none")};
  color: #3d3d3d;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

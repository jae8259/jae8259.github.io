import styled from "styled-components";

export const BaseHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: purple;
`;

export const Contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li + li {
      margin-left: 30px;
    }
  }
`;

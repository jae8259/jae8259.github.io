import { SIDEBAR_WIDTH } from './../../constants';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: ${SIDEBAR_WIDTH}%;
  float: left;
  box-sizing: border-box;
  background-color: #0ff;
  height: 100%;
  box-shadow: 0px 0px 3px black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: 0.4s ease;
  z-index: 100;
  vertical-align: baseline;
`;

import { SIDEBAR_WIDTH } from './constants';
import styled from 'styled-components';

export const AppContainer = styled.div`
  width: ${100 - SIDEBAR_WIDTH}%;
  float: right;
  box-sizing: border-box;
  background: pink;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 0.4s ease;
  z-index: 0;
`;

export const InvisibleButton = styled.button`
  background: transparent;
  border: none !important;
`;

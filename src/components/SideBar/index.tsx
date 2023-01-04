import React, { useState, useRef, useEffect, Component } from 'react';
// import { SideBarProps } from './types';
import { FaListUl, FaSearch } from 'react-icons/fa';
import { SideBarContainer } from './styled';

export default function SideBar() {
  const [isTagMenuOpen, setIsTagMenuOpen] = useState<boolean>(true);

  return (
    <div>
      <SideBarContainer>
        <FaListUl />
        <FaSearch></FaSearch>
      </SideBarContainer>
    </div>
  );
}

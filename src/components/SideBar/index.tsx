import React, { useState, useRef, useEffect, Component } from 'react';
import { FaListUl, FaSearch } from 'react-icons/fa';
import { SIDEBAR_WIDTH } from '../../constants';
import { InvisibleButton } from '../../styles';
import { SideBarContainer } from './styled';

export default function SideBar() {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);
  const openSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <div>
      <SideBarContainer width={isOpenSideBar ? SIDEBAR_WIDTH : 100 - SIDEBAR_WIDTH}>
        <InvisibleButton onClick={openSideBar}>
          <FaListUl />
        </InvisibleButton>
      </SideBarContainer>
    </div>
  );
}

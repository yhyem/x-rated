import React, { Component } from 'react';

import styled from 'styled-components';

import BigChat from '../../assets/images/btn_floating_l.svg';
import SmallChat from '../../assets/images/btn_floating_s.svg';

class FloatingButton extends Component {
  render() {
    return (
      <FloatingButtonBlock id="custom-button">
        <BigChatImg src={BigChat} />
        <SmallChatImg src={SmallChat} />
      </FloatingButtonBlock>
    );
  }
}

const FloatingButtonBlock = styled.div`
  position: sticky;
  margin-right: 16px;
  float: right;
  bottom: 0px;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-right: 130px;
  }
`;

const BigChatImg = styled.img`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const SmallChatImg = styled.img`
  display: block;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

export default FloatingButton;

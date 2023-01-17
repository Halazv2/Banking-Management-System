import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/img/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";

import {Link as LinkR} from "react-router-dom";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className='flexCenter animate whiteBg' style={y > 100 ? {height: "60px"} : {height: "80px"}}>
        <NavInner className='container flexSpaceCenter'>
          <Link className='pointer flexNullCenter' to='home' smooth={true}>
            <LinkR to='/'>
              <img src={LogoIcon} alt='logo' style={{width: "90px", height: "70px", marginLeft: "15px"}} />
            </LinkR>
          </Link>
          <BurderWrapper className='pointer' onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className='flexNullCenter'>
            <li className='semiBold font15 pointer'>
              <Link activeClass='active' style={{padding: "10px 15px"}} to='home' spy={true} smooth={true} offset={-80}>
                <LinkR to='/'>Home</LinkR>
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link activeClass='active' style={{padding: "10px 15px"}} to='services' spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link activeClass='active' style={{padding: "10px 15px"}} to='blog' spy={true} smooth={true} offset={-80}>
                Blog
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link activeClass='active' style={{padding: "10px 15px"}} to='contact' spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className='flexNullCenter'>
            <li className='semiBold font15 pointer'>
              <LinkR to='/sign-in' style={{padding: "10px 30px 10px 0"}}>
                Log in
              </LinkR>
            </li>
            <li className='semiBold font15 pointer flexCenter'>
              <LinkR to='/create-account' className='radius8 lightBg' style={{padding: "10px 15px"}}>
                Create Account
              </LinkR>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

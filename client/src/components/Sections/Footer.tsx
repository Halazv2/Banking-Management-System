import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll";
// Assets
import LogoIcon from "../../assets/img/logo.png";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className='darkBg'>
        <div className='container'>
          <InnerWrapper className='flexSpaceCenter' style={{padding: "30px 0"}}>
            <Link className='flexCenter animate pointer' to='home' smooth={true} offset={-80}>
              <img src={LogoIcon} alt='logo' style={{width: "90px", height: "70px", marginLeft: "15px"}} />
            </Link>
            <StyleP className='whiteColor font13'>
              © {getCurrentYear()} - <span className='purpleColor font13'>CMD</span> All Right Reserved | Made with <span className='purpleColor font13'>❤</span> by{" "}
              <a className='purpleColor font13' href='https://github.com/Halazv2' target='_blank' rel='noreferrer'>
                Halazv2
              </a>
            </StyleP>

            <Link className='whiteColor animate pointer font13' to='home' smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

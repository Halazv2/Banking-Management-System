import React from "react";
import styled from "styled-components";
// Assets
const ContactImg3 = "https://images.pexels.com/photos/4199525/pexels-photo-4199525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const ContactImg2 = "https://images.pexels.com/photos/6963845/pexels-photo-6963845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const ContactImg1 = "https://images.pexels.com/photos/7794003/pexels-photo-7794003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export default function Contact() {
  return (
    <Wrapper id='contact'>
      <div className='lightBg'>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>Let's get in touch</h1>
            <p className='font13'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className='row' style={{paddingBottom: "30px"}}>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
              <Form>
                <label className='font13'>First name:</label>
                <input type='text' id='fname' name='fname' className='font20 extraBold' />
                <label className='font13'>Email:</label>
                <input type='text' id='email' name='email' className='font20 extraBold' />
                <label className='font13'>Subject:</label>
                <textarea id='message' name='message' className='font20 extraBold' />
              </Form>
              <SumbitWrapper className='flex'>
                <ButtonInput type='submit' value='Send Message' className='pointer animate radius8' style={{maxWidth: "220px"}} />
              </SumbitWrapper>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 flex'>
              <div style={{width: "50%"}} className='flexNullCenter flexColumn'>
                <ContactImgBox>
                  <img src={ContactImg2} alt='office' className='radius6' />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg3} alt='office' className='radius6' />
                </ContactImgBox>
              </div>
              <div style={{width: "60%"}}>
                <div style={{marginTop: "100px"}}>
                  <img src={ContactImg1} alt='office' className='radius6' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: none;
  background-color: #0071ce;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #0189f9;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

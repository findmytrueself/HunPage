import React from "react";
import Logo from "../components/Logo";
import Styled from "styled-components";

const Container = Styled.div`
    position: relative;
    left:20em;
    width: 50vw;
    height: 50vh;
    /* min-height:100vh; */
    /* padding:50px 100px; */
    display: flex;
    justify-content:center;
    align-items:center;

`;

const ContactForm = Styled.form`
    
`;
const ContactFormTitle = Styled.h2`
    font-size: 30px;
    color: #333;
    font-weight:500;
`;
const ContactFormInputBox = Styled.div`
    position: relative;
    width: 100%;
    margin-top:10px;
`;
const ContactFormInput = Styled.input`
    width: 100%;
    padding: 5px 0;
    font-size:16px;
    margin:10px 0;
    border:none;
    border-bottom: 2px solid #333;
    outline:none;
    resize:none;
`;
const ContactFormTextarea = Styled.textarea`
    width: 100%;
    padding: 5px 0;
    font-size:16px;
    margin:10px 0;
    border:none;
    border-bottom: 2px solid #333;
    outline:none;
    resize:none;
`;
const ContactFormSpan = Styled.span`
    padding: 5px 0;
    font-size:16px;
    pointer-events : none;
    transition:0.5s;
    color:#fff;

    
`;
const ContactPage = () => {
  return (
    <>
      <Logo />
      <Container>
        <ContactForm>
          <ContactFormTitle>Send Message</ContactFormTitle>
          <ContactFormInputBox>
            <ContactFormInput type="text" name="" required="required" />
            <ContactFormSpan>Full Name</ContactFormSpan>
          </ContactFormInputBox>
          <ContactFormInputBox>
            <ContactFormInput type="text" name="" required="required" />
            <ContactFormSpan>Email</ContactFormSpan>
          </ContactFormInputBox>
          <ContactFormInputBox>
            <ContactFormTextarea required="required"></ContactFormTextarea>
            <ContactFormSpan>Type your Message...</ContactFormSpan>
          </ContactFormInputBox>
          <div className="inputBox">
            <input type="submit" name="" value="Send" />
          </div>
        </ContactForm>
      </Container>
    </>
  );
};

export default ContactPage;

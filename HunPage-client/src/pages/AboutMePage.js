import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Logo from "../components/Logo";
import AOS from "aos";
import "aos/dist/aos.css";

export const ContentContainer = Styled.div`
  display: flex;
`;

export const TitleColumn = Styled.div`
    display: flex;
    flex-direction:column;
`;

export const MyPhoto = Styled.img`
  /* border:solid #FFF; */
    margin:0;
    padding:0;
    width: 20vw;
    position: relative;
    left:14em;
    bottom:5em;
    height:80vh;
`;

export const SnsIconWrapper = Styled.div`
  margin:0;
  padding:0;
  position: absolute;
  top:27rem;
  left :16.5rem;
  width: 15vw;
  height:10vh;
`;

export const SnsIconButtonWrapper = Styled.ul`
/* border: solid #fff; */
  margin:0.5em;
  padding:0;
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  position: relative;
  bottom:4.5em;
`;

export const SnsIconButton = Styled.li`
  list-style : none;
  width:50px;
  height:40px;
  cursor: pointer;
`;

export const SnsIconContent = Styled.img`
  width:100%;
  height: 100%;
  transition: 0.5s;
  display: flex !important;
  justify-content:center;
  align-items:center;
  color: #fff;
  font-size:30px !important;
`;

export const Contact = Styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content:center;
  align-items:center;
  height:5vh;
  position: relative;
  bottom:4em;
`;

export const ContentTitle = Styled.p`
    position: relative;
    font-size:2em;
    bottom:0.8em;
    left:9em;
    width:60vw;
`;

export const Content = Styled.p`

    position: relative;
    font-size:1.2em;
    bottom:2em;
    left:14em;
    width:60vw;
`;

export const SkillContainer = Styled.div`
    display: flex;
    justify-content : space-evenly;
    position: relative;
    padding: 1em;
    margin: 1em;
    bottom: 8em;
`;

export const SkillTitle = Styled.p`
    font-size: 2em;
`;

export const SkillContent = Styled.p`
    display: flex;
`;

export const BlankContent = Styled.p`
  display: flex;
  justify-content:center;
`;

export const BlankImg = Styled.a`
  width: 6rem;
  border: solid #fff;
  position: absolute;
  bottom: 1;
  opacity: ${(props) => (props.scroll ? 0 : 1)};
  /* transition: transparent; */
`;

export const SkillImg = Styled.img`
width: 14em;
height: 8em;
border: solid #fff;
border-width: 2px;
`;
export const SkillImg2 = Styled.img`
width: 14em;
height: 8em;
`;

export const HideScroll = Styled.div`
  position: relative;
  bottom:4em;
  overflow:hidden;
`;

export const SlideContainer = Styled.div`
  width:1000vw;
  transition: transform 0.3s;
  transform: ${(props) => {
    if (props.button === "left") {
      return `translate(${props.value}vw)`;
    } else if (props.button === "right") {
      return `translate(${props.value}vw)`;
    }
  }};
`;

export const SlideInner = Styled.div`
  width:100vw;
  float:left;
`;

export const SlideImg = Styled.img`
  width:100%;
`;

export const SlideButtonWrapper = Styled.div`
  position: relative;
  bottom:4em;
  display: flex;
  justify-content: space-between;
`;
export const SlideButton = Styled.button`
  font-size:50px;
  width:100px;
  height:80px;
  border-radius : 5px;
  padding: 0;
  border: none;
  cursor: pointer;
  &:hover{
  background: #FFF;
  color: white;
  }
`;
export const SlideDescription = Styled.p`
    font-size: 2em;
    position: relative;
    bottom : 1em;
`;

export const CertificateContainer = Styled.div`
display: flex;
justify-content:center;
margin: 10px;
`;

export const CertificateWrapper = Styled.div`
  display: flex;
  flex-direction:column;
  `;

export const CertificateImg = Styled.img`
border-radius : 10px;
  width:30vw;
  height:50vh;
`;

export const CertBlank = Styled.p`
width:5vw;
`;

export const CertDiscription = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  font-size:2em;
  height:20vh;
`;

const AboutMePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [button, setButton] = useState("");
  const [value, setValue] = useState(0);
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    window.onmousewheel = (e) => {
      if (e.wheelDelta > 0) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  const slideHandler = (e) => {
    if (e.target.className.split(" ")[2] === "leftButton") {
      setButton("left");
      if (value !== 0) {
        setValue(value + 100);
      }
    } else if (e.target.className.split(" ")[2] === "rightButton") {
      setButton("right");
      if (value !== -900) {
        setValue(value - 100);
      }
    }
  };

  return (
    <>
      <Logo />
      <ContentContainer>
        <MyPhoto data-aos="zoom-in-left" src="images/hunProfile.PNG" />
        <SnsIconWrapper data-aos="zoom-in-left">
          <SnsIconButtonWrapper>
            <SnsIconButton>
              <a href="https://github.com/findmytrueself">
                <SnsIconContent src="images/github.png" />
              </a>
            </SnsIconButton>
            <SnsIconButton>
              <a href="https://tender-river-902.notion.site/TIL-b0cb4073403f43cb9cae81f3da7923e7">
                <SnsIconContent src="images/notion.png" />
              </a>
            </SnsIconButton>
            <SnsIconButton>
              <a href="https://www.linkedin.com/in/hun-im-01644a207/">
                <SnsIconContent src="images/linkedin.png"></SnsIconContent>
              </a>
            </SnsIconButton>
          </SnsIconButtonWrapper>
          <SnsIconButtonWrapper>
            <SnsIconButton>
              <a href="https://www.instagram.com/instant.coffee_/?hl=ko">
                <SnsIconContent src="images/instagram.png" />
              </a>
            </SnsIconButton>
            <SnsIconButton>
              <a href="https://www.youtube.com/channel/UCFCddKu8YvVdLIB-bYilGPg/videos">
                <SnsIconContent src="images/youtube.png" />
              </a>
            </SnsIconButton>
          </SnsIconButtonWrapper>
          <Contact>010-8077-8054</Contact>
          <Contact>load1999@gmail.com</Contact>
        </SnsIconWrapper>
        <TitleColumn>
          <ContentTitle data-aos="fade-right">
            중국어하는 프론트엔드 개발자 임훈입니다.
          </ContentTitle>
          <Content data-aos="fade-up">
            공식문서와 적절한 검색을 통해 어떤 상황에서도 문제 해결 할 수
            있습니다.
          </Content>
          <Content data-aos="fade-up">
            좋은 개발자란 코드를 잘 짜는 것 뿐만 아니라, 팀 시너지를 끌어올릴수
            있는 사람입니다.
          </Content>
          <Content data-aos="fade-up">
            커뮤니케이션과 협업을 통해 개개인의 능력을 극대화 시킬 수 있습니다.
          </Content>
          <Content data-aos="fade-up">
            열정 넘치는 사람들과 함께 성장해 나가겠습니다.
          </Content>
          <Content data-aos="fade-up">
            평소 근력운동과 수영을 통해 건강관리를 하고 있습니다.
          </Content>
          <Content data-aos="fade-up">
            취미는 피아노치기, 스쿠버다이빙, 홍차마시기 입니다.
          </Content>
          <Content data-aos="fade-up">
            왼쪽의 깃허브와 노션페이지에 매일 공부한 내용을 기록합니다.
          </Content>
        </TitleColumn>
      </ContentContainer>
      <BlankContent>
        <BlankImg scroll={scroll}></BlankImg>
      </BlankContent>
      <br />
      <br />
      <br />
      <SkillContainer data-aos="fade-down">
        <SkillTitle>프론트엔드 기술</SkillTitle>
        <SkillContent>
          <SkillImg src="images/JS.jpeg"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/react.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg2 src="images/styledComponent.png"></SkillImg2>
        </SkillContent>
      </SkillContainer>
      <SkillContainer data-aos="fade-down">
        <SkillTitle>백엔드 기술</SkillTitle>
        <SkillContent>
          <SkillImg src="images/nodejs.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/mysql.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/sequelizejs.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/mvc.jpg"></SkillImg>
        </SkillContent>
      </SkillContainer>
      <HideScroll>
        <SlideContainer button={button} value={value}>
          <SlideInner>
            <SlideImg data-aos="fade-right" src="images/slide1.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide2.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide3.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide4.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide5.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide6.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide7.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide8.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide9.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide10.png" />
          </SlideInner>
        </SlideContainer>
      </HideScroll>
      <SlideButtonWrapper
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <SlideButton className="leftButton" onClick={(e) => slideHandler(e)}>
          👈
        </SlideButton>
        <SlideDescription>
          페어프로그래밍이 끝나고 페어들이 남긴 저에 대한 평가입니다.
        </SlideDescription>
        <SlideButton className="rightButton" onClick={(e) => slideHandler(e)}>
          👉
        </SlideButton>
      </SlideButtonWrapper>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/graduation1.png"
          />
        </CertificateWrapper>
        <CertBlank />
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/graduation2.png"
          />
        </CertificateWrapper>
      </CertificateContainer>
      <CertDiscription data-aos="fade-up">
        중국전매대학 커뮤니케이션 전공
      </CertDiscription>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/kotracert.png"
          />
          <CertDiscription data-aos="fade-up" data-aos-duration="3000">
            KOTRA 북경 유학생 무역 교육 수료
          </CertDiscription>
        </CertificateWrapper>
      </CertificateContainer>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/hskcert.png"
          />
          <CertDiscription data-aos="fade-up" data-aos-duration="3000">
            新HSK 6급 218점
          </CertDiscription>
        </CertificateWrapper>
      </CertificateContainer>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/finacert.png"
          />
          <CertDiscription data-aos="fade-up" data-aos-duration="3000">
            Fina 세계수영선수권대회 계약직
          </CertDiscription>
        </CertificateWrapper>
      </CertificateContainer>
    </>
  );
};

export default AboutMePage;

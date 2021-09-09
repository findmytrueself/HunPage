import React from "react";
import Styled from "styled-components";
import Logo from "../components/Logo";

export const PortfolioWrapper = Styled.div`
  display: flex;
`;

export const PortfolioDescript = Styled.div`
  position: relative;
  bottom: 9em;
  left:4em;
  margin:8em;
  width:40%;
  height:70vh;
`;

export const PortfolioDescriptTitle = Styled.p`
  margin:0;
  padding:0;
  font-size:2.5em;
  display: flex;
  justify-content: center;
`;

export const SkillsBoxUl = Styled.ul`
  display: flex;
  flex-direction:row;
  justify-content:center;
  position: relative;
  right:1em;
  top:1em;
`;

export const SkillsBox = Styled.li`
  border: 1px solid grey;
  list-style:none;
  width:15vw;
  height:18vh;
`;

export const SkillsDescription = Styled.p`
  color:white;
  font-size:20px;
`;

export const PortfolioSkills = Styled.img`
  width:100%;
  height:100%;
`;

export const PortfolioContent = Styled.div`
    width:50vw;
    height:80vh;
    display: flex;
    flex-direction:column;
    float: right;
    position: relative;
    right: 1em;
    /* justify-content:center; */
    /* align-items:center; */
`;

export const PortfolioImg = Styled.img`
  width:100%;
  height:100%;
`;

export const PortfolioTitle = Styled.div`
  position: relative;
  top:1em;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size:1.5em;
`;

const PortfolioPage = () => {
  return (
    <>
      <Logo />
      <PortfolioWrapper>
        <PortfolioDescript>
          <PortfolioDescriptTitle>사용된 기술</PortfolioDescriptTitle>
          <SkillsBoxUl>
            <SkillsBox>
              <PortfolioSkills src="images/react.png"></PortfolioSkills>
            </SkillsBox>
            {/* <SkillsDescription>
              리액트 훅스를 사용하여 함수형 컴포넌트로 제작하였습니다.
            </SkillsDescription> */}
          </SkillsBoxUl>
          <SkillsBoxUl>
            <SkillsBox>
              <PortfolioSkills src="images/styledcomponent.png"></PortfolioSkills>
            </SkillsBox>
            {/* <SkillsDescription>
              Styled-Component를 이용하여, CSS를 모듈 Props관리를 통해, CSS를 다뤘습니다.
            </SkillsDescription> */}
          </SkillsBoxUl>
          <SkillsBoxUl>
            <SkillsBox>
              <PortfolioSkills src="images/aos.png"></PortfolioSkills>
            </SkillsBox>
            {/* <SkillsDescription>
              리액트 훅스를 사용하여 함수형 컴포넌트로 제작하였습니다.
            </SkillsDescription> */}
          </SkillsBoxUl>
        </PortfolioDescript>
        <PortfolioContent>
          <PortfolioImg src="images/huntube.png"></PortfolioImg>
          <PortfolioTitle>개인 포트폴리오 웹사이트 제작</PortfolioTitle>
        </PortfolioContent>
      </PortfolioWrapper>
    </>
  );
};

export default PortfolioPage;

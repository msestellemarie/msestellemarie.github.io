import React from "react";
import profile from "../img/profile.jpg";
import resume from "../img/Corey_Resume.pdf";
import styled from "styled-components";
import { Envelope } from "styled-icons/fa-solid";
import { Github, Twitter } from "styled-icons/fa-brands";
import { KeyboardArrowDown, KeyboardArrowUp } from "styled-icons/material";
import { Link } from "react-scroll";

const ArrowDown = styled.div`
  cursor: pointer;
  flex-basis: 10%;
`;

const ArrowUp = styled.div`
  color: #f0c0ad;
  cursor: pointer;
  flex-basis: 10%;
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  min-height: fit-content;
  width: 80vw;
`;

const Button = styled.button`
  background-color: #f0c0ad;
  border-radius: 0.5rem;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: grad;
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 700;
  padding: 1rem;
  width: 100%;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-basis: 80%;
  flex-direction: column;
  justify-content: center;
  min-height: fit-content;

  @media (max-width: 900px) {
    width: 85%;
  }
`;

const Description = styled.div`
  font-family: myriad-pro-semiextended;
  font-size: 2.25rem;
`;

const Header = styled.div`
  align-items: center;
  background-color: #f0c0ad;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  min-height: fit-content;
  text-align: center;
  width: 100vw;
`;

const ImageColumn = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 30%;
  flex-direction: column;

  @media (max-width: 900px) {
    flex-basis: unset;
    margin-bottom: 2rem;
  }
`;

const Location = styled.div`
  font-family: myriad-pro-semiextended;
  font-size: 2.25rem;
`;

const Page = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ProfilePicture = styled.img`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const ResumeLink = styled.a`
  color: #fff;
  width: 100%;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SkillDescription = styled.div`
  color: #333;
  font-size: 1.25rem;
  line-height: 1.35;
  margin-bottom: 1.9rem;
  margin-top: 0.5rem;
`;

const SkillHeader = styled.div`
  color: #f0c0ad;
  font-family: myriad-pro-semiextended;
  font-size: 1.5rem;
  font-weight: 700;
`;

const SkillSummary = styled.div`
  font-family: myriad-pro-semiextended;
  font-size: 1.5rem;
  margin-left: 2.5rem;

  @media (max-width: 900px) {
    margin-left: 0;
    text-align: center;
  }
`;

const SkillsColumn = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 70%;
  flex-direction: column;

  @media (max-width: 900px) {
    flex-basis: unset;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
`;

const SocialLinks = styled.div`
  font-size: 2.25rem;
  margin-top: 1rem;
`;

const Spacer = styled.div`
  flex-basis: 10%;
`;

const Title = styled.div`
  font-family: grad;
  font-size: 5rem;
  font-style: italic;
  margin-bottom: 1rem;
`;

const Home = ({ props }) => (
  <Page>
    <Header name="header">
      <Spacer />
      <Content>
        <Title>Estelle Corey</Title>
        <Description>software developer</Description>
        <Location>denver, co</Location>
        <SocialLinks>
          <SocialLink href="https://twitter.com/msestellemarie" target="_blank">
            <Twitter size="1.75rem" />
          </SocialLink>
          <SocialLink href="https://github.com/msestellemarie" target="_blank">
            <Github size="1.75rem" />
          </SocialLink>
          <SocialLink href="mailto:hello@estellecorey.com">
            <Envelope size="1.75rem" />
          </SocialLink>
        </SocialLinks>
      </Content>
      <ArrowDown>
        <Link smooth={true} to="body">
          <KeyboardArrowDown size="70" />
        </Link>
      </ArrowDown>
    </Header>
    <Body name="body">
      <ArrowUp>
        <Link smooth={true} to="header">
          <KeyboardArrowUp size="70" />
        </Link>
      </ArrowUp>
      <Content>
        <Row>
          <ImageColumn>
            <ProfilePicture src={profile} />
            <ResumeLink href={resume} target="_blank">
              <Button>Download my resume</Button>
            </ResumeLink>
          </ImageColumn>
          <SkillsColumn>
            <SkillSummary>
              <SkillHeader>Current Position</SkillHeader>
              <SkillDescription>
                I'm a Software Developer for East5th Inc. I focus mostly on
                front end development, but also dabble in some back end. I've
                been working for East5th since May 2018.
              </SkillDescription>
              <SkillHeader>Projects</SkillHeader>
              <SkillDescription>
                Check out my GitHub and resume to learn more about previous
                projects.
              </SkillDescription>
              <SkillHeader>Front End Technologies</SkillHeader>
              <SkillDescription>
                React, Apollo GraphQL, Storybook, Styled Components, Semantic UI
                React
              </SkillDescription>
              <SkillHeader>Back End Technologies</SkillHeader>
              <SkillDescription style={{ marginBottom: 0 }}>
                Node.js, GraphQL, MongoDB, Express
              </SkillDescription>
            </SkillSummary>
          </SkillsColumn>
        </Row>
      </Content>
      <Spacer />
    </Body>
  </Page>
);

export default Home;

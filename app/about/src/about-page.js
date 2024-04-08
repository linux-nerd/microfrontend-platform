import React from "react"
import styled from "styled-components"

const WelcomeAbout = styled.div`
  text-align: center;
  margin-top: 100px;
  font-size: 100px;
  font-weight: bold;
`

const Paragraph = styled.p`
  text-align: center;
`

function AboutPage() {
  return (
    <>
      <WelcomeAbout>
        Hello from About page
      </WelcomeAbout>
      <Paragraph>This is a About MFE. In order to go to Home MFE, either click home from navbar or change url to https://localhost:3000/home/</Paragraph>
    </>
  );
}

export default AboutPage

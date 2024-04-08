import React from "react"
import styled from "styled-components"

const WelcomeHome = styled.div`
  text-align: center;
  margin-top: 100px;
  font-size: 100px;
  font-weight: bold;
`
const Paragraph = styled.p`
  text-align: center;
`

function HomePage() {
  return (
    <>
      <WelcomeHome>Hello from Home page</WelcomeHome>
      <Paragraph>This is a Home MFE. In order to go to About MFE, either click abhout from navbar or change url to https://localhost:3000/about/</Paragraph>
    </>
  )
}

export default HomePage

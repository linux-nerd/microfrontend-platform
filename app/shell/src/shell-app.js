import React from "react"
import styled from "styled-components"
import { loadMicrofrontend } from "./util";

window.createMfeContainerInShell = (elementId) => {
  const mainContent = document.createElement('div');
  mainContent.id = elementId;
  document.querySelector('#main-root').appendChild(mainContent);
}

const Navigation = styled.nav`
  padding: 1rem;
`

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const NavItem = styled.a`
  padding: 8px 16px;
  text-decoration: none;
  display: block;
`

const MFRoot = styled.main`
  border 2px solid #000;
  height: 80vh;
`

const Header = () => {
  const redirect = (url, path) => (e) => {
    e.preventDefault();
    history.pushState({}, "", `/${path}/`);
    loadMicrofrontend(url)
  }
  return (
    <Navigation>
      <NavList>
        <li><NavItem href="#" onClick={redirect("http://localhost:8081", "home")}>Home</NavItem></li>
        <li><NavItem href="#" onClick={redirect("http://localhost:8082", "about")}>About</NavItem></li>
      </NavList>
    </Navigation>
  )
}

function ShellApp() {
  return (
    <section>
      <Header/>
      <MFRoot id="main-root" />
    </section>
  );
}

export default ShellApp;

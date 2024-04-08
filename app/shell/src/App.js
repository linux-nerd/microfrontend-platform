import React from "react"

window.createMfeContainerInShell = (elementId) => {
  const mainContent = document.createElement('div');
  mainContent.id = elementId;
  document.getElementById('main-root').appendChild(mainContent);
}

const getScriptTag = () => {
  const scripts = document.querySelectorAll("body>script")
  let selectedScript
  scripts.forEach(script => {
    if(script.src.includes("main.js")) {
      selectedScript = script
    }
  })
  return selectedScript
}

const cleanRoot = () => {
  document.querySelector("#main-root").innerHTML = ""
}


function loadMicrofrontend(url) {
  let script = getScriptTag()
  cleanRoot()
  if(script) script.parentNode.removeChild( script );

  script = document.createElement('script');
  document.body.appendChild(script);
  script.src = `${url}/main.js`;
}

const Header = () => {
  const redirect = (url, path) => (e) => {
    e.preventDefault();
    history.pushState({}, "", `/${path}/`);
    loadMicrofrontend(url)
  }
  return (
    <nav>
      <ul>
        <li><a href="#" onClick={redirect("http://localhost:8081", "home")}>Home</a></li>
        <li><a href="#" onClick={redirect("http://localhost:8082", "about")}>About</a></li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <section>
      <Header/>
      <main id="main-root">
      </main>
    </section>
  );
}

export default App;

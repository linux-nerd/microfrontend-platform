export const getScriptTag = () => {
  const scripts = document.querySelectorAll("body>script")
  let selectedScript
  scripts.forEach(script => {
    if(script.src.includes("main.js")) {
      selectedScript = script
    }
  })
  return selectedScript
}

export const cleanRoot = () => {
  document.querySelector("#main-root").innerHTML = ""
}


export const loadMicrofrontend = (url) => {
  let script = getScriptTag()
  cleanRoot()
  if(script) script.parentNode.removeChild( script );

  script = document.createElement('script');
  document.body.appendChild(script);
  script.src = `${url}/main.js`;
}

document.querySelector(".languageButton").addEventListener("click", function (){
  let newLanguage = this.innerHTML;
  switch(newLanguage){
    case "Español":
    newLanguage = "es";
    break;
    default:
    newLanguage = "en";
  }
  localStorage.currLanguage = newLanguage;
});

checkLanguage();

function checkLanguage() {
  const mainURL = "deathbymisstep.com/";
  const currURL = location.href.slice(location.href.indexOf("/") + 2);

  if(currURL != mainURL) {
    localStorage.currLanguage = getLanguageURL(currURL);
  } else {
    const languageSet = localStorage.currLanguage ? true : false;
    if(!languageSet) {
      const browserLanguage = navigator.language.substr(0, 2);
      localStorage.currLanguage = browserLanguage;
    }

    if(localStorage.currLanguage != "en") {
      const nextState = { additionalInformation: "Updated the URL with JS" };
      history.replaceState(nextState, "", location.protocol + mainURL + localStorage.currLanguage);
    }
  }
}

function getLanguageURL(url) {
  return url.slice(url.lastIndexOf("/") + 1);
}

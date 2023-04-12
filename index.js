const Languages = {
  English: "en",
  Spanish: "es"
}

document.querySelector(".languageButton").addEventListener("click", function () {
  let newLanguage = this.innerHTML;
  switch (newLanguage) {
    case "Español":
      newLanguage = Languages.Spanish;
      break;
    default:
      newLanguage = Languages.English;
  }
  localStorage.currLanguage = newLanguage;
});

checkLanguage();

function checkLanguage() {
  const mainURL = "deathbymisstep.com/";
  const currURL = location.href.slice(location.href.indexOf("/") + 2);

  if (currURL != mainURL) {
    localStorage.currLanguage = getLanguageURL(currURL);
  } else {
    const languageSet = localStorage.currLanguage ? true : false;
    if (!languageSet) {
      const browserLanguage = navigator.language.substring(0, 2);
      localStorage.currLanguage = browserLanguage;
    }

    if (localStorage.currLanguage != Languages.English) {
      if (!isLanguageAvailable(localStorage.currLanguage)) return;
      location.replace(location.protocol + "//" + mainURL + localStorage.currLanguage);
    }
  }
}

function getLanguageURL(url) {
  return url.slice(url.indexOf("/") + 1, url.lastIndexOf("/"));
}

function isLanguageAvailable(currLanguage) {
  for (let language in Languages) {
    if (Languages[language] === currLanguage) return true;
  }
  return false;
}
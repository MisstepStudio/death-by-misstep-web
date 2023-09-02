const Languages = {
  English: "en",
  Spanish: "es",
};

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
      location.replace(
        location.protocol + "//" + mainURL + localStorage.currLanguage
      );
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

checkLanguage();

document.addEventListener("DOMContentLoaded", () => {
  AddEventListenersInTeam();

  document
    .querySelector(".languageButton")
    .addEventListener("click", function () {
      ChangeLanguage();
    });
});

function AddEventListenersInTeam() {
  const teamMemberImgs = document.querySelectorAll(".team-member-img");
  const teamCardLinks = document.querySelectorAll(".team-card-link");

  for (let i = 0; i < teamMemberImgs.length; i++) {
    teamMemberImgs[i].addEventListener("mouseover", function () {
      teamCardLinks[i].classList.toggle("team-card-link-hover");
    });

    teamMemberImgs[i].addEventListener("mouseout", function () {
      teamCardLinks[i].classList.toggle("team-card-link-hover");
    });
  }
}

function ChangeLanguage() {
  let newLanguage = this.innerHTML;
  switch (newLanguage) {
    case "Español":
      newLanguage = Languages.Spanish;
      break;
    default:
      newLanguage = Languages.English;
  }
  localStorage.currLanguage = newLanguage;
}

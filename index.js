let searchButton = document.getElementById("search");
let inputPart = document.getElementById("inputPart");
let input = document.getElementById("input");
let repoContainer = document.getElementById("repoContainer");
let searchIcon =document.getElementById('searchIcon')
let menuIcon=document.getElementById('menuIcon');
let myList=document.getElementById('myList');
let firstNavItems = document.getElementsByClassName("firstNav");
let mode=document.getElementById('mode');
let noDesc;
let body=document.getElementById('body')
mode.onclick=function(){
body.classList.toggle('dark')
}
menuIcon.addEventListener("click", function() {
myList.classList.toggle("open");

for (let i = 0; i < firstNavItems.length; i++) {
if (myList.classList.contains("open")) {
firstNavItems[i].style.display = "block";
} else {
firstNavItems[i].style.display = "none";
}
}
});
searchButton.addEventListener("click", function () {
userSearch();
});
searchIcon.addEventListener('click',function(){
userSearch();
})
function userSearch() {
const URL = `https://api.github.com/users/${input.value}`;
fetch(URL, {
headers: {
      Accept: "application/vnd.github.v3+json",
},
})
.then((response) => response.json())
.then((data) => {
console.log(data);
let userImage = document.getElementById("userImage");
userImage.src = data.avatar_url;
let login = document.getElementById("login");
login.innerText = data.login;
let name = document.getElementById("name");
data.name !== null? (name.innerText = data.name): (name.innerText = " ");
let bio = document.getElementById("bio");
bio.innerText = data.bio;
let following = document.getElementById("following");
following.innerHTML = `${data.following} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg> following`;
      let followers = document.getElementById("followers");
      followers.innerHTML = `${data.followers} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg> followers`;
      let copmany = document.getElementById("copmany");
      if (data.company !== null && data.company !== undefined) {
        copmany.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
<path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
<path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
</svg> ${data.company}`;
      } else {
        copmany.innerText = " ";
      }
      let email = document.getElementById("email");
      if (data.email !== null && data.email !== undefined) {
        email.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> ${data.email}`;
      } else {
        email.innerText = "";
      }
      let location = document.getElementById("location");
      if (data.location !== null && data.log !== undefined) {
        location.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> ${data.location}`;
      } else {
        location.innerText = "";
        fetch(data.repos_url)
          .then((response) => response.json())
          .then((repos) => {
            repoContainer.innerHTML = "";
            for (let i = 0; i < 6; i++) {
 
              if (repos[i].description == null) {
                noDesc = "";
                repoContainer.innerHTML += `
              <div class="repodata">
          <div class="repoName">
            <div class="nameofProject">${repos[i].name}</div>
            <div class="visibility">Public</div>
          </div>
          <div class="description">
            ${noDesc}
          </div>
          <div class="language">
            <div class="circle"></div>
            <p class="lang">${repos[i].language}</p>
          </div>
        </div>
              `;
              } else {
                repoContainer.innerHTML += `
              <div class="repodata">
          <div class="repoName">
            <div class="nameofProject">${repos[i].name}</div>
            <div class="visibility">Public</div>
          </div>
          <div class="description">
            ${repos[i].description}
          </div>
          <div class="language">
            <div class="circle"></div>
            <p class="lang">${repos[i].language}</p>
          </div>
        </div>
              `;
              }

              let circle = document.querySelectorAll(".circle");
              if (repos[i].language == "HTML") {
                circle[i].style.backgroundColor = "#E34C26";
              } else if (repos[i].language == "CSS") {
                circle[i].style.backgroundColor = "#563D7C";
              } else if (repos[i].language == "JavaScript") {
                circle[i].style.backgroundColor = "#F1E05A";
              } else {
                circle[i].style.backgroundColor = "pink";
              }
            }
          });
      }
    });
}

// let clientSecret = "b156dc5823f31103520f388fcc1bffb73d7a4c55";
// let clientID = "3f817cf4b0fbfd4ee5df";
let inputOne=document.getElementById('input-feild-one');
let inputtwo=document.getElementById('input-feild-two');
let search1=document.getElementById('search-one');
let search2=document.getElementById('search-two');
let searchIcon =document.getElementById('searchIcon')
let menuIcon=document.getElementById('menuIcon');
let myList=document.getElementById('myList');
let firstNavItems = document.getElementsByClassName("firstNav");
let mode=document.getElementById('mode');
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

search1.onclick=function(){
    console.log(inputOne.value)
    getDataProfile();
}
search2.onclick=function(){
console.log(inputtwo.value)
getDataProfile2();
}

function getDataProfile(){
// const URL = `https://api.github.com/search/users?q=${inputOne.value}&client_id=${clientID}&client_secret=${clientSecret}`;
const URL = `https://api.github.com/users/${inputOne.value}`;
fetch(URL, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
//     let imageOne=document.getElementById('imageOne');
//     let imageTwo=document.getElementById('imageTwo');
//     imageOne.src= data.avatar_url

.then((response) => response.json())
    .then((repo) => {
      console.log(repo);
      let imageOne = document.getElementById("imageOne");
      imageOne.src = repo.avatar_url;
      let nameUser1 = document.getElementById("nameUser1");
      nameUser1.innerText = repo.login;
      let numberofRepo1=document.getElementById("numberofRepo1");
      let publicRepo1=repo.public_repos;
      localStorage.setItem('publicRepo1',repo.public_repos);
      numberofRepo1.innerText=publicRepo1
      let result1= localStorage.setItem("numberofRepo1","repo.public_repos")

    // .catch((error) => {
    // console.error('Error:', error);
    // });
})
}
function getDataProfile2(){
  // const URL = `https://api.github.com/search/users?q=${inputOne.value}&client_id=${clientID}&client_secret=${clientSecret}`;
  const URL = `https://api.github.com/users/${inputtwo.value}`;
  fetch(URL, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
  .then((response) => response.json())
      .then((repo) => {
        console.log(repo);
        let imageTwo = document.getElementById("imageTwo");
        imageTwo.src = repo.avatar_url;
        let nameUser2 = document.getElementById("nameUser2");
        nameUser2.innerText = repo.login;
        let publicRepoCount = repo.public_repos;
        localStorage.setItem("publicRepoCount2", publicRepoCount);
        let numberofRepo2=document.getElementById("numberofRepo2");
        numberofRepo2.innerText=repo.public_repos
        let result2= localStorage.setItem("numberofRepo2","repo.public_repos")
    // .catch((error) => {
    // console.error('Error:', error);
    //    });
  })
  }
  let start=document.getElementById('start');
  start.addEventListener("click",function(){
    let publicRepoCount1 = localStorage.getItem("publicRepo1");
    console.log(publicRepoCount1 );
    let publicRepoCount2 = localStorage.getItem("publicRepoCount2");
    console.log(publicRepoCount2)
    if (publicRepoCount1>publicRepoCount2){
    let result1=document.getElementById('result1');
    let result2=document.getElementById('result2');
      result1.innerText='winner'
      result2.innerText='loser'
    }else if(publicRepoCount1<publicRepoCount2){
    let result1=document.getElementById('result1');
    let result2=document.getElementById('result2');
    result2.innerText='winner'
    result1.innerText='loser'
    }else{
    let tie=document.getElementById('tie')
    tie.innerText=`It's a tie`
    }
})

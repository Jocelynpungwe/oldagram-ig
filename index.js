import {posts} from '/data.js'

const avatarImg = document.getElementById("avatar-pic");
const nameUser = document.querySelector("h2");
const locationUser = document.querySelector("h3");
const postImg = document.getElementById("post-id");
const likes = document.querySelector("h4");
const comment = document.querySelector("p");
const likebtn = document.querySelector(".heart-icon");
const btnPost = document.getElementById("btn-post");
const likesIcon = document.getElementById('heart-icon')

let i = 0;
let likesCount = posts[i].likes;
let isLiked = true;


likebtn.addEventListener("click", function(){
liked()
    
})
postImg.addEventListener("dblclick",function(){
  liked()  
})

btnPost.addEventListener("click",function(){
    
post();
    
i+=1;   
if(i===3)
{
    i=0;
}

})

function post(){
    
avatarImg.innerHTML = `<img class="my-pic" src="${posts[i].avatar}"/>`;
nameUser.textContent = posts[i].name;
locationUser.textContent = posts[i].location;
postImg.innerHTML = `<img class="post" src="${posts[i].post}"/>`;
likes.textContent = posts[i].likes + " likes";
comment.innerHTML = `<span class="username-El">${posts[i].username}</span>` + " "+ posts[i].comment;

likesCount = posts[i].likes;   
}

function liked(){
        if(isLiked){
    likesCount+=1;
    likes.textContent = likesCount + " likes";
    isLiked = false
    likesIcon.style.color = 'red'
    
    }
    else if(isLiked==false)
    {
        likesCount-=1
        likes.textContent = likesCount + " likes"
        isLiked = true
        likesIcon.style.color = 'black'
    }
    
}


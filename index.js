const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const avatarImg = document.getElementById("avatar-pic");
const nameUser = document.querySelector("h2");
const locationUser = document.querySelector("h3");
const postImg = document.getElementById("post-id");
const likes = document.querySelector("h4");
const comment = document.querySelector("p");
const likebtn = document.querySelector(".heart-icon");
const btnPost = document.getElementById("btn-post");

let i = 0;
let likesCount = posts[i].likes;


likebtn.addEventListener("click", function(){
    likesCount+=1;
    likes.textContent = likesCount + " likes";

    
})
postImg.addEventListener("dblclick",function(){
    likesCount+=1;
    likes.textContent = likesCount + " likes";
    
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
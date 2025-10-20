//practice no 1
//async-await use kora hoi code k sohoj korar jonno.

//practice no 2
async function pervez (){
    try{
        const url = "https://jsonplaceholder.typicode.com/users/2"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("Error:",error);
    }
}
pervez()

//practice no 3
//callback hell holo akta function er moddhe onno akta function tar moddhe onno r akta function aivabe onnek gulo function niya kaj korle take bole callback hell.
//callback hell salution holo async and await use kore code likha. krn er moddhome code onnek gosano hoi jake bola jai smart code.

//practice no 3
async function users (){
    try{
        const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
        const response = await fetch(url);
        const data = await response.json();


        const postUrl = await fetch(`post-url?userId=${data.id}`);
        const postInfo = await postUrl.json();

        const cmntsRes = await fetch(`c-url?postId=${postInfo[0].id}`)
        const cmnts = await cmntsRes.json();

    }catch(error){
        console.error("EError:",error);
    }
}
users();
//practice no 3
fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),(user)=>{
    user.json((user)=>{
        fetch(`post-url?userId = ${user.id}`,(post)=>{
            post.json((posts)=>{
                fetch(`c-url?postId=${posts[0].id}`,(cmnts)=>{
                    comments.json((cmnts)=>{
                        console.log(cmnts);
                    })
                })
            })
        })
    })
}

//practice no 3

try {
    const url = "https://jsonplaceholder.typicode.com/users/5";
fetch (url,(user)=>{
    user.json((user)=>{
        fetch(`post-url?userId=${user.id}`,(post)=>{
            post.json((posts)=>{
                fetch(`c-url?postId=${posts[0].id}`,(cmnts)=>{
                    cmnts.json((cmnts)=>{
                        console.log(cmnts);
                    })
                })
            })
        })
    })
})
} catch (error) {
    console.error("Error:","akhan porjonto ki aste parsos")
}


//practice


try {
    const url = "https://jsonplaceholder.typicode.com/users/5";
fetch (url,(user)=>{
    user.json((user)=>{
        fetch(`post-url?userId=${user.id}`,(post)=>{
            post.json((posts)=>{
                fetch(`c-url?postId=${posts.id}`,(cmnts)=>{
                    cmnts.json((comments)=>{
                        console.log(comments);
                    })
                })
            })
        })
    })
})
} catch (error) {
    console.error("Error:",error);
}

async function fetchData () {
try {
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const user = await userRes.json();

    const postRes = await fetch(`post-url?userId=${user.id}`);
    const posts = await postRes.json();

    const cmntsRes = await fetch(`c-url?postId=${posts[0].id}`);
    const cmnts = await cmntsRes.json();
    
    console.log(cmnts);


}catch(error){
    console.error("Error:",error);
}

}
fetchData();

// practice no 1
const url = "https//www.facebook.com/users/1";
const userRes = await fetch((a))



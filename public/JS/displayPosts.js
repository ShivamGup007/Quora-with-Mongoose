const postList= document.querySelector('.postList');
const idUser=document.querySelector('#idUser').getAttribute('idUser');
const idUsername=document.querySelector('#idUsername').getAttribute('idUsername');
const postBtn=document.querySelector('.postBtn');
const inputText=document.querySelector('.input-Text');


async function loadInitialPosts(){
    try{
        let posts= await axios.get(`/addPost?id=${idUser}`);
          console.log(posts);
          posts.data.forEach(element => {
          postToDom(element);
            });
        }
    catch(err){
        throw new Error(err);
    }
}

loadInitialPosts();

function postToDom(post){
    $('.postList').prepend
      ($('<div>').addClass('postListBox').append
          ($('<p>').addClass('userName').text(post.userId.username).append
             ($('<div>').addClass('postListItem').append
                ($('<p>').text(post.inputText)))))}

function newPostToDom(post){
    $('.newPost').prepend
      ($('<div>').addClass('postListBox').append
          ($('<p>').addClass('userName').text(post.username).append
             ($('<div>').addClass('postListItem').append
                ($('<p>').text(post.inputText)))))}                

postBtn.addEventListener('click', async (e) => {
    console.log(inputText.value);
    e.preventDefault();
    try {
        let data = await axios.post('/addPost',
          {
            inputText: inputText.value,
            id: idUser,
            username: idUsername
          });
        console.log(data);
        let post = data.data;
        console.log(post);
        let p= post.newPost;
        let uName= p.username;
        console.log(uName);
        newPostToDom(p);
    }
    catch(err){
        console.log(err);
        alert(`Question couldn't be added ${err.message}`);
    }
})
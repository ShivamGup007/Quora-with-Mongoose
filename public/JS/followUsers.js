const followuserId = document.querySelector('#followuserId').getAttribute('followuserId');
const userId = document.querySelector('#userId').getAttribute('userId');
const allUserList=document.querySelector('.allUserList');
const followBtn=document.querySelector('.followBtn');

allUserList.addEventListener('click',async (e)=>
{
      console.log(e);
      let attribute= e.target.getAttribute('class');
      let id= e.target.getAttribute('id');
      let followuserId=e.target.nextElementSibling.getAttribute('followuserId');
      console.log(followuserId);
      console.log(userId);
      if(attribute=='followBtn')
      {
      e.target.innerText= 'Following 🕵️‍♂️';
      try
      {
        let questions = await axios.get(`/addFollowedUserQuestions?followuserId=${followuserId}`);
        let newQuestions= questions.data;
        console.log(newQuestions);
        let l=newQuestions.length;
        let Questions= await axios.get(`/getQuestions?userId=${userId}`);
        let oldQuestions= Questions.data;
        console.log(oldQuestions);
        if(l>=3){
            oldQuestions.unshift(newQuestions[0]);
            oldQuestions.unshift(newQuestions[1]);
            oldQuestions.unshift(newQuestions[2]);}
            else
        if(l==2){
                oldQuestions.unshift(newQuestions[0]);
                oldQuestions.unshift(newQuestions[1]);}
                else
        if(l==1){
                 oldQuestions.unshift(newQuestions[0]);}
      }                   
    catch(err)
    {
      console.log(err);
      alert(`Question couldn't be added ${err.message}`);
    }}}
)

allUserList.addEventListener('dblclick',(e)=>
{
  followBtn.innerText= 'Follow';
})
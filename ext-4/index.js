let btn=document.getElementById('btn');
let modal=document.getElementById('modal');
let closeBtn=document.getElementById('closeBtn');
let closeIcon=document.getElementById('closeIcon')
console.log(closeIcon);
btn.addEventListener('click',function(e){
   modal.classList.add('scale-100');
})

closeBtn.addEventListener('click',function(e){
   modal.classList.remove('scale-100');
})
closeIcon.addEventListener('click',function(e){
   modal.classList.remove('scale-100');
})

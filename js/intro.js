document.addEventListener('DOMContentLoaded', ()=>{
    var value = document.querySelector('.value');

    document.addEventListener('scroll' , ()=>{
        var scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
        var scrollHeight =document.documentElement.scrollHeight;
        var clientHeight =document.documentElement.clientHeight;
        
        var S = Math.floor(scrollTop / (scrollHeight - clientHeight ) * 100);
        
        value.style.width = S + '%';
    })
})




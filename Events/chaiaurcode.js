//ways to attachEvents()

// document.getElementById('owl').onclick = function(){
    // alert("owl clicked")
// }

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

document.getElementById('images').addEventListenereventListener('click',function(e){
    console.log("clicked inside the ul");
},false)

document.getElementById('owl').addEventListener('click',function(e){
     console.log("owl")
     e.stopPropagation()
},false)

doucnemt.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
},false)

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tageName);
    if(e.target.tageName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.reomve()
    }
})
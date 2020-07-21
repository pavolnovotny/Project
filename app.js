const rep= document.querySelectorAll('.copyMe')
let holder ={}

rep.forEach((el,index)=>{
    el.style.left= `${index * 100}px`
    el.addEventListener('click', (e)=>{
     holder.obj= el.cloneNode(true)
     holder.obj.style.cursor='move'
     holder.obj.classList.add('newb') 
     holder.obj.style.backgroundColor='green'
     holder.obj.style.left= el.offsetLeft + 'px'
     holder.obj.style.top= el.offsetTop +200+ 'px'
     holder.obj.moves=Math.floor(Math.random()*25)

     holder.obj.startX= el.offsetLeft
     holder.obj.startY= el.offsetTop

     holder.obj.int = setInterval(mover, 25)
     console.log(holder)
     function mover(){
         if(holder.obj.moves <=0){
             clearInterval(holder.obj.int)
         } else{
             holder.obj.moves--
             holder.obj.startY+=10
             holder.obj.startX+=1
             holder.obj.style.top= holder.obj.startY + 'px'
             holder.obj.style.left= holder.obj.startX + 'px'
         }
     }
     
     document.body.appendChild(holder.obj)
     drager(holder.obj)

     function drager(el){
        let pos = {}
        el.onmousedown=dragMouse

        function dragMouse(e){
            pos.nx=e.clientX
            pos.ny=e.clientY
            console.log(pos.nx)  
        }
     }
     


    })
})
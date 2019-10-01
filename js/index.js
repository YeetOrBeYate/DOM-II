// Your code goes here
const body = document.querySelector('body');
const links = document.querySelectorAll('nav a');
const pics = document.querySelectorAll('img');
//count variable needed for keydown listener
var count = 0;
//scale vairable for wheel listener
var scale = 1;

////////event listener that changes the backgroundColor based on mouse movment/////////////////////
body.addEventListener('mousemove', (e)=>{
   x = e.clientX * .5;
   y = e.clientY * .5;
   z = window.scrollY * .25;
  body.style.backgroundColor = "rgb("+x+","+y+","+z+")";
})
/////// Event listener to add and remove text to my nav links////////////////////////
body.addEventListener('keydown', (e)=>{
  console.log(e);
  count +=1;
  if(e.key == 'Backspace' || e.keyCode == 32){
    links.forEach((link)=>{
      let text = link.innerText;
      link.innerText = text.slice(0,(1+(link.innerText.length - count)));
    });
    count = 0;
  }else if (e.key != "Backspace" || e.key != "Shift") {
    links.forEach((link)=>{
      link.innerText += e.key;
    })
  }

  if(e.keyCode == 32){
    e.preventDefault();
  }
})

///////Adding zoom function to images/////////////////////////////////////////////
pics.forEach((pic)=>{
  pic.addEventListener('wheel', (event)=>{
    event.preventDefault();

 scale += event.deltaY * -0.01;

 // Restrict scale
 scale = Math.min(Math.max(.125, scale), 4);

 // Apply scale transform
 pic.style.transform = `scale(${scale})`;
 console.log(scale);
  })
})

//////////////adding doubleclick for images//////////////////////////////////
pics.forEach((pic)=>{
  pic.addEventListener('dblclick', (e)=>{
    TweenMax.to(pic, 1, {
      rotation: 360,
      ease: Elastic.easeOut.config( 1, 0.75)
    })
  })
})
///////////////////load event listener////////////////////////////////////
window.addEventListener('load', (e)=>{
  alert("sup dweeb");
})
//////////////////mouseover event listener//////////////////////////
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p)=>{
  p.addEventListener('mouseover', (e)=>{
    e.target.style.color = 'coral';
  })
})
//////////scroll event to change the page titles fontSize////////////////////
window.addEventListener('scroll', ()=>{
  let size = window.scrollY * .10;
  document.querySelector('.logo-heading').style.fontSize = `${size}px`;
})
//added resize event listener////////////////////////////////////////////////////
window.addEventListener('resize', ()=>{
  alert("oh am I not the right size for you??");
})
//////////////////////adding borders to links//////////////////
links.forEach((link)=>{
  link.addEventListener('mouseenter', ()=>{
    link.style.border = "thick solid black";
  })
})

const form = document.querySelector('form');
console.log("this is 1st")

form.addEventListener('submit' , function(e){
    e.preventDefault();


const height = parseInt( document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('.results');

if(height === '' || height<0 || isNaN(height)) {
    results.innerHTML = ` please give a valid height ${height}`;

}
else if( weight=== '' || weight<0 || isNaN(weight)){
   results.innerHTML = `please provide a valid weight ${weight}`; 

}
else{
    const bmi = (weight/(height*height/10000)).toFixed(2);
    // show the results
     results.innerHTML = `<span>${bmi}</span>`;
}
});

// MOVEOVER EVENT

const like= document.querySelector('likeMe').addEventListener((moveBy))


// EventListner
const changeText = function(){
    document.querySelector('h5').innerHTML="Dont stay healthy...";
    document.querySelector('h5').style.backgroundColor="black";
}
const changeMe = setTimeout( changeText,2000);
// const changeMe = setInterval(changeText,3000);

document.querySelector('#owl').addEventListener('click', function() {
    clearTimeout(changeMe)
    alert('this is alert')
    console.log('stop');
})



// sstgeh

const randomColor = function () {
    const hex = '0123456ABCDEF';
      let color = '#';
      for (let i=0; i <6; i++){
          color += hex[Math.floor(Math.random()* 6)];
      }
      return color;
  }
  
  // start channging color

  let intervalId;
  const startChangingColor = function(){
      
      if(!intervalId){
     intervalId= setInterval(changeColor, 2000);
      }
  
      function changeColor(){
      document.body.style.backgroundColor = randomColor();
      } 
  }
  
     document.querySelector('.start').addEventListener('click', startChangingColor);
  
  
  // stop changing color
   const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId=null;
   }
  
   document.querySelector('.stop').addEventListener('click', stopChangingColor);


   //   
   
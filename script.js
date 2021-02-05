let boxColor = document.querySelectorAll('span');
   
function initColorized(){
   window.addEventListener('load', function(){    
            
      boxColor.forEach((item) => {
         item.addEventListener('mouseenter', function(){
   
            let cor1 = Math.floor(Math.random() * 255).toString(8);   
            let cor2 = Math.floor(Math.random() * 255).toString(8); 
            let cor3 = Math.floor(Math.random() * 255).toString(8);       
   
            let ultimateColor = [cor1,cor2,cor3];    
                     
            item.style.background="rgb("+ultimateColor+")";
            item.style.boxShadow="0px 0px 20px rgb("+ultimateColor+")";
            
         }); 
         
         item.addEventListener('mouseleave', function(){
            item.removeAttribute('style'); 
         });
   
      });   
   });
}

initColorized();


// SOM AO CLICAR

function initSoundClick(){
   let audio = document.querySelector('audio');
   let cont = 0;

   function soundPlay(){
      
      for(i = 0; i < 1; i++){
         cont++;
      }
      
      let audioUrl = audio.getAttribute('src'); 

      if(cont <= 30){      
         let contentUrl = audioUrl.replace(cont-1, cont);   
         audio.setAttribute('src', contentUrl);
      } else {
         cont = 0;
         contentUrl = audioUrl.replace('30', '0');
         audio.setAttribute('src', contentUrl);
      }
      
      audio.play();  
   }

   boxColor.forEach((item) => {
      item.addEventListener('click', soundPlay);
   });
}

initSoundClick();
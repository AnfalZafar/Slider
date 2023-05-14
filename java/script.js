var mainimg = document.querySelector("img");
var img = ["images/1.jpeg" ,"images/2.jpeg" ,"images/3.jpeg"  ];
var num = 0;

function next(){
    num++;
   if(num >= img.length){
    num = 0;
    mainimg.src = img[num]
   }else{
    mainimg.src = img[num]

   }
}
function back(){
    num--;
   if(num < 0){
    num = img.length-1;
    mainimg.src = img[num]
   }else{
    mainimg.src = img[num]

   }
}


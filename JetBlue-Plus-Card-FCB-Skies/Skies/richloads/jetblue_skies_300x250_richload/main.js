// Var Declaration
var tl;
var tl2;
var container = myFT.$("#container");
var default_exit = myFT.$("#default_exit");
var endframe = myFT.$("#endframe")
var endframe_headline = myFT.$("#endframe_headline")
// var myVid=myFT.$("#video1");
var clickTag1_url="";
// var vid_time_triggered=false;

//
default_exit.on('click',function(){
  myFT.clickTag(1,clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads',function(){

  clickTag1_url=myFT.instantAds.clickTag1_url;

})

// myVid.on("canplay", function() {
//   init();	
// }); 

init()

function animate() {

  // let video play
  tl.addLabel('frame1', 0)
    .to('#container', 0.5, { autoAlpha: 1 }, 'start+=0.5')
    .staggerTo(['#copy01', '#copy02'], 1, { autoAlpha: 1, ease: "expo.out" }, 0.1, 'frame1+=0.5')
    .staggerFrom(['#copy01', '#copy02'], 1, { y: '50', ease: "expo.out" }, 0.1, 'frame1+=0.5')
    .to('#copy02', 1, {y:'65'}, 'frame1+=3')
    .staggerTo(['#copy03'], 1, { autoAlpha: 1, ease: "expo.out" }, 0.1, 'frame1+=3.5')
    .staggerFrom(['#copy03'], 1, { y: '100', ease: "expo.out" }, 0.1, 'frame1+=3.5')
    .to(['#copy01', '#copy02', '#copy03'], 0.3, {autoAlpha:0}, 'frame1+=6')
    
    tl.addLabel('frame2', 6)
    .staggerTo(['#copy04', '#copy05', '#copy06'], 1, { autoAlpha: 1, ease: "expo.out" }, 0.1, 'frame2+=0.5')
    .staggerFrom(['#copy04', '#copy05', '#copy06'], 1, { y: '50', ease: "expo.out" }, 0.1, 'frame2+=0.5')
    .to('#legal1', 0.3, {autoAlpha:0}, 'frame2')
    .to('#endframe', 1, { top: 0, ease: "expo.out" }, 'frame2+=4')
    .to('#shine', 0.5, {backgroundPosition: '450px 0px'});

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.25, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.25, { scale: 1, ease: Power1.easeInOut })
}



function init() {

  tl = new TimelineMax();

  animate();
  setRollover();


  //Using inbuilt time update function
  // myVid.on('timeupdate', function(){
  //   // console.log(myVid[0].currentTime)
  //   if(myVid[0].currentTime>5.5){
  //     if(!vid_time_triggered){
  //       vid_time_triggered=true;
  //       showEndframe();	
  //     }
  //   }
  // });						
  // Fade in creative/ad
  // container[0].style.transition = "opacity .5s";
  // container[0].style.opacity = 1;				
}

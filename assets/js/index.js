gsap.registerPlugin(ScrollTrigger);



window.addEventListener('DOMContentLoaded', () => {
  this.disabledScroll(true);
  this.sectionOneScrollAnimations();
  this.sectionTwoScrollAnimations();

  this.initAnimations();
});

function disabledScroll( disabled ){
  disabled ? this.document.querySelector('body').style.overflowY = "hidden" :
    this.document.querySelector('body').style.overflowY = "auto";
}



function initAnimations(){
  gsap.from( "#header > *", {
    delay: .4,
    duration: .8,
    y: 30,
    opacity: 0,
    stagger: .15
  });

  gsap.from( "#centerBox > *", {
    delay: .5,
    duration: .8,
    y: 90,
    opacity: 0,
    stagger: .15
  });

  gsap.from( "#sectionOne > *", {
    delay: .7,
    duration: .5,
    y: 70,
    opacity: 0,
    stagger: .1,
    onComplete:() => this.disabledScroll(false)
  });
}

function sectionOneScrollAnimations() {
  gsap.to( "#centerBox > *", {
    scrollTrigger: {
      trigger: "#centerBox",
      scrub: true,
      start: '-130px top'
    },
    duration: .6,
    y: -40,
    opacity: .3,
    stagger: .15
  });

  gsap.to( "#imageSecond", {
    scrollTrigger: {
      trigger: "#imageSecond",
      scrub: true,
      start: '40% center'
    },
    duration: .6,
    y: -90
  });

  gsap.to( "#imageSecondCap", {
    scrollTrigger: {
      trigger: "#imageSecondCap",
      scrub: true,
      start: '-200px center'
    },
    duration: 1,
    y: 90
  });

  gsap.to( "#imageThird", {
    scrollTrigger: {
      trigger: "#imageThird",
      scrub: true,
      start: '40% center'
    },
    duration: .6,
    y: -90
  });

  gsap.to( "#imageFourth", {
    scrollTrigger: {
      trigger: "#imageFourth",
      scrub: true,
      start: '40% center'
    },
    duration: .6,
    y: -90
  });

  gsap.to( "#imageFourthCap", {
    scrollTrigger: {
      trigger: "#imageFourthCap",
      scrub: true,
      start: '40% center'
    },
    duration: .6,
    y: -90
  });

  gsap.to( "#imageFifth", {
    scrollTrigger: {
      trigger: "#imageFifth",
      scrub: true,
      start: '20% center'
    },
    duration: .6,
    y: -50
  });
}

function sectionTwoScrollAnimations() {
  gsap.from( "#letter > *", {
    scrollTrigger: {
      trigger: "#letter",
      scrub: true,
      start: '-200px center'
    },
    duration: .5,
    y: -40,
    opacity: 0,
    stagger: .15
  });

  gsap.from( "#titles > *", {
    scrollTrigger: {
      trigger: "#titles",
      scrub: true,
      start: '-200px center'
    },
    duration: .5,
    y: -40,
    opacity: 0,
    stagger: .15
  });

  gsap.from( "#paragraph", {
    scrollTrigger: {
      trigger: "#titles",
      scrub: true,
      start: 'center center'
    },
    duration: .5,
    y: -40,
    opacity: 0
  });

  gsap.from( "#imgOne", {
    scrollTrigger: {
      trigger: "#titles",
      scrub: true
    },
    duration: .5,
    x: -40,
    opacity: 0
  });

  gsap.from( "#imgTwo", {
    scrollTrigger: {
      trigger: "#titles",
      scrub: true
    },
    duration: .5,
    x: 80,
    opacity: 0
  });
}
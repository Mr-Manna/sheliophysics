
window.addEventListener('load',()=>{
    // console.log('window ready');
 
    const lenis = new Lenis({
        smoothTouch: true,
        syncTouch: true,
    })

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    gsap.registerPlugin(ScrollTrigger);
    let titleAnimation = gsap.fromTo('.title-text',{scale:0, opacity:0,duration:3},{scale:1,opacity:1, duration:3})
    const panels = document.querySelectorAll('.panel')
  console.log(panels.length);
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: panels[0],
            start: 'top top',
            end: 'bottom botton',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            toggleActions:'play reverse restart reverse',
        }
    });
    // tl.fromTo('.title-text',{scale:0, opacity:0,duration:3},{scale:1,opacity:1, duration:3})
    tl.fromTo('.title-text',{scale:1,opacity:1, duration:1},{scale:0,opacity:0,duration:1})

    let poem = document.querySelector('poem')
    gsap.set(poem,{yPercent: 3100})
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[1],
            start: '-=35% top',
            // end: '+=200%',
            scrub: 1,
            // pin: true,
            // pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    tl2.fromTo('.poem',{yPercent:-200,opacity:0, duration:1},{yPercent:100,opacity:1, duration:1})


    document.querySelectorAll('.far-earth-div').forEach(div=>{
            
        const text = new SplitType('#para-one')
        gsap.set('#para-one',{ autoAlpha: 1})
   
        let tl3 = gsap.timeline({
            scrollTrigger:{
                trigger: div,
                start: '-=20% top',
                // end: '+=250',
                // scrub: 2,
                // pin: true,
                // pinSpacing: false,
                // markers: true,
                toggleActions:'play reverse reverse reverse',
            }
        });
        
        tl3.from(text.chars,{
            y: 0,
            // skewZ: 10,
            opacity: 0,
            stagger:.1,
            duration: .1
        })
        .to('.far-earth-2',{scale:1.10,opacity:1,duration:3, delay:1},'<')
    })

    
    let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[2],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });

    
    let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[3],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    
    let tl5 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[4],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl6 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[5],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl7 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[6],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl8 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[7],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl9 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[8],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl10 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[9],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl11 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[10],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl12 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[11],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl13 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[12],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl14 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[13],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl15 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[14],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl16 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[15],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl17 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[16],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl18 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[17],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl19 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[18],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl20 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[19],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl21 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[20],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    let tl22 = gsap.timeline({
        scrollTrigger:{
            trigger: panels[21],
            start: 'top top',
            // end: '+=200%',
            scrub: 1,
            pin: true,
            pinSpacing: false,
            // markers: true,
            toggle:'restart none none reverse'
        }
    });
    

});
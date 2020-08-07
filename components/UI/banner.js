import React, { Fragment , useEffect} from 'react'
import LoadingSvg from './loading';
import {  TweenLite, Power4, gsap} from 'gsap';

const banner = () => {

    useEffect(() => {
        if(process.browser){
            gsap.to("body", 0, {visibility:'visible'})
            TweenLite.to(".loading-animation", 0, {css:{display:'block'}})
            const t1 = new TimelineLite();
            const t2 = new TimelineLite({delay:4.6});
            let footer = $("footer")
            const svg = $(".loading-animation svg g").children()
            const bigBox = svg[0];
            const blueBox = svg[1];
            const smallLetters = svg[2];
            const techIt = svg[3];
            const iBox = svg[4];
            const smallBox = svg[5];

             // main loading animation
            t1.staggerFrom( [techIt, smallLetters], 1.45, {x:'-150',left:50, transformOrigin:"50% 50%", ease:Power4.easeOut,opacity:0, delay:1.4}, 0,'start')
            t1.from(iBox , 2, {y: '-100vh', rotation: 360*8 ,transformOrigin: "50% 50%", opacity:0, ease:'bounce'},1.45,'start')
            .to(".loading-animation", 1.4,{ scale:0, transformOrigin:"-120px 0px", ease:'expo', display:'none', opacity:0})


            t1.from( blueBox  , 2, {y:'-100vh', x:'50vw',rotateX: 45,  transformOrigin:"50% 50%", ease:Power4.easeOut, opacity:0}, 0.12, 'start')
            t1.from( bigBox , 2, {y:'-100vh', x:'-50vw', rotateX: -45 ,transformOrigin:"50% 50%", ease:Power4.easeOut,  opacity:0}, 0.12, 'start')
            t1.from( smallBox, 2, {y:'100vh', x:'-50vw',rotateX: 45, fill:'blue', transformOrigin:"50% 50%", ease:Power4.easeOut, opacity:0}, 0.12, 'start')

            // //page content animation
            t2.staggerFrom(['.as',  "#back-top", footer, ".whatwedo", "#workedWith"],  2,{y:'100vh', opacity:0, display:'none', ease:'bounce', clearProps:'transform', delay:0}, 0, 'start')
            .from(".banner .container", 1.5,{  display:'none', clearProps:'transform' ,onStart: onLoadingComplete}, 0)
            .from(".banner .container .row .col-md-12 .b-text", 1.5,{  y:'150', rotateX: 45, opacity:0, clearProps:'transform', ease:'expo',}, 2)
            .from('.t-fixed-comment', 1,{x:'-100', opacity:'0', background:'transparent', ease:'expo', clearProps:'y', onStart: onLoadingComplete}, 0)
            .staggerFrom( ["header .row .col-md-1"], 2.5, {x:'150', y:'100',rotateX: 45, scale:0, rotation: 360*8,  ease:'bounce', opacity:1,clearProps:'y'}, 0, 'start')

            const onLoadingComplete = function(){
                const myobj =$(".loading-animation");
                myobj.remove();
            }
            
        }
        
        
    }, [])

    return (
        <Fragment>
            <div className="banner d-flex align-items-center " >
            <div className="loading-animation  ">
                <LoadingSvg/>
            </div>
            <div className="container" style={{background: "transparent", transform: "inherit"}} >
            <div className="row" >
                <div className="col-md-12"  >
                <p className="t-text" >Are you ready to make your brand</p>
                <div className="clip-text clip-text_one clip-text--cover" >Remarkable?</div>
                <p className="b-text">So are we.</p>
                </div>
            </div>
            </div>
            </div>
            <style global jsx>{`
                .banner {background:url("/img/banner.jpg") no-repeat center; background-size: cover;      background-attachment: fixed; height: 100vh; overflow: hidden;}
                .banner .t-text {font-size:$fnt-sz * 2; font-weight: 600; margin-bottom:$margin;}
                .banner .b-text {font-size:$fnt-sz * 3; margin-top:-1rem; font-weight: 600;}
                .banner .clip-text {font-size: 8vw; font-weight: bold; line-height: 1; background-attachment: fixed; width:100%; height:100%; color: #fff; -webkit-background-clip: text; -webkit-text-fill-color: transparent;  -webkit-text-stroke-width: 2px; -webkit-text-stroke-color:$alt-color;}
                .banner .clip-text:before, .clip-text:after {position: absolute; content: '';}
                .banner .clip-text:before {z-index: -2; top: 0; right: 0; bottom: 0; left: 0; background-image: inherit;}
                .banner .clip-text:after {position: absolute; z-index: -1; top: .125em; right: .125em;  bottom: .125em; left: .125em; background-color: #000;}
                .banner .clip-text--no-textzone:before {background-position: -.75em 0;}
                .banner .clip-text--no-textzone:after {content: none;}
                .banner .clip-text--cover,
                .banner .clip-text--cover:before {
                    background-repeat: no-repeat;
                }
                .banner .clip-text_one {
                    background-image:url("../img/text-banner.jpg"); background-size: cover; background-position: center;
                }
            `}</style>
        </Fragment>
    )
}

export default banner

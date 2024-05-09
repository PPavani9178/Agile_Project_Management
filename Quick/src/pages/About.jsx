import React from 'react'
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function About() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const videoId = 'xky48zyL9iA';
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        };
  return (
    <div>
        <div className='bg-cyan-400 text-center'>
            <h1 className="text-3xl font-bold text-white font-sans mt-4 ml-28">Quick Project Management makes it easier for teams to manage projects and tasks</h1>
            <p className="font-sans text-white mt-11 text-xl ml-28">What is Quick Project Management? Quick Project Management is the visual tool that empowers your team to manage any type of project, workflow, or task tracking. Add files, checklists, or even automation: Customize it all for how your team works best. Just sign up, create a board, and you’re off!</p>
            <div>
      {/* <h2 className='text-white text-3xl font-bold'>Quick Project Management</h2> */}
      <div className="ml-96 mt-11">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <button className='bg-white p-3 mt-11 rounded-md'>Signup-it's free</button>
        </div>
            <p className="font-sans text-white mt-11 text-xl ml-28">Join over 2,000,000 teams worldwide who are using Quick Project Management to get more done.</p>
            <div className="flex gap-20 ml-28 mt-11">
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/5R2Z2uNm0syrV3SRka6U2h/f29d41f1c3e2eb55dbde443f07b4552d/coinbase_2x.png?w=323&fm=webp" alt="" style={{width:"20%",height:"20%"}}/>
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/6siYQZNhk6oCQZSW7nDsZM/dd430f7c60496a4a4a86346ccdcc7f6a/JohnDeere.svg" alt="" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/xsZg04XyKQXvIIfkvoF9k/c1e13a857ab867754c652c5da3e87504/Grand_Hyatt.svg" alt="" />
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/4mi0yTvx9p26OvEyGfpfqy/8148229f21c056ac0c381a6c1742842b/logo-google.svg" alt="" />
            </div>
        </div>
       <div className="flex ml-28 font-sans gap-40">
       <div className="w-96">
        <div className='shadow-xl mt-2 ml-2'>
            <h4 className='font-semibold '>Boards</h4>
            <p >Whatever the project or process, boards keep tasks organized and work moving forward. In a glance you can see everything from “things to do” to “aww yeah we did it!”</p>
        </div>
        <div className='shadow-xl mt-2'>
        <h4 className='font-semibold '>Lists</h4>
            <p className='ml-2'>The different stages of a task. Start as simple as To Do, Doing, or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
        </div>
        <div className='shadow-xl mt-2'>
        <h4 className='font-semibold '>Cards</h4>
            <p className='ml-2'>Cards represent tasks and can hold all the information you need to get the job done. As you make progress, move cards across lists to show their status.</p>
        </div>
       </div>
       <div className="w-96 m-auto">
       {/* <Slider {...settings}>
      <div>
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png?w=1080&fm=webp" alt="" />
      </div>
      <div>
        
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/3ZjLCD2fANfXYSN3ar9WpE/dc84a408c6a3ee89bee4a646ff6d5966/Lists_2x.png?w=1080&fm=webp" alt="" />
      </div>
      
      
    </Slider> */}
    <img src="https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png?w=1080&fm=webp" alt="" />
       </div>
       </div>
       {/* A productivity powerhouse
Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. */}
    </div>
  )
}

export default About
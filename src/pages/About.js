import React, { Component } from 'react';
import "./About.css";
import ProfPic from "../assets/ProfPic.JPG";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={ProfPic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
        <h1 className="name_title"> Alexandra Halfon</h1>
          <div className="brief_description">
          <p> Hi!! My name is Alexandra, and I'm a rising Junior at Tulane University, pursuing 
            majors in Computer Science and Economics and a minor in English. I live in Houston, TX, 
            though my parents originally came to the U.S. from Cuba. I'm extremely proud of my Cuban 
            heritage and absolutely love the culture in which I was raised. I grew up speaking 
            Spanish and English at home while also learning French, and this experience with languages 
            fostered my interest in the concept of language itself. Upon my first introduction to 
            computer science, my insatiable curiosity led the computer programming languages to become 
            my next challenge.</p> 
          <p> I'm extremely enthusiastic when it comes to learning and experiencing new things. In 
            addition to exploring new languages, I love to spend time exploring and discovering music 
            across all genres- though classic and soft rock remain my favorites. My passion for music 
            extends to the instruments as well, and my favorite hobby would have to be playing piano. 
            As great as my passion is for the arts, I'm also very athletic. I played soccer, volleyball, 
            lacrosse, and ran track up until college, and still love hiking, running, and just being 
            outdoors- which is really inconvenient being a Houston resident! I also like doing the 
            not-so-active things like watching TV of course, and favorite shows would have to include 
            New Girl, Breaking Bad, Seinfeld, and Criminal Minds.</p> 
            <p> So, there's a little bit about me, who I am and what I like to do. I'm so excited to 
              learn, collaborate, and innovate as an IBM Accelerate participant this summer!</p>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
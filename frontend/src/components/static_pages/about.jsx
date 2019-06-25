import React, { Component } from 'react';
// import Markdown from 'react-markdown';
// import Text from './Markdowns/about.md';
 import '../../index.css';
import SingleCarousel from '../Single_Carousel/Single_Carousel';

class About extends Component {
  constructor(props) {
    super(props)

    this.state = { text: null }
  }

  componentWillMount() {
    fetch(Text).then((response) => response.text()).then((text) => {
      this.setState({ text: text })
    })
  }
    render() {
      return (
          // <Markdown className="" escapeHtml={false} source={this.state.text} />
          <>
          <SingleCarousel  header={"About"}/>
     

<div class="container" itemprop="text">

<h1 className='mt-5 mb-5'> About </h1>


<h2 className="mb-3">Our Mission</h2>



<p>The Young Masterbuilders in Motion (YMIM) inspires, connects, and empowers young women orphans, adoptees, and foster youth alumnae to thrive.</p>

<p>The YMIM provides a holistic approach to mentoring and leadership development. Our programs are delivered through empowerment workshops, life enrichment retreats, and international missions experiences.</p>

<h2  className="mb-3" > Our Values </h2>

<p>We believe that a caring and supportive community can equip young women and empower global communities.</p>

<p>We whole-heartedly embrace peace, grace, joy, love and wisdom and want to share what we have learned in our wide and varied life experiences with those who are yet vulnerable and who desire such support.</p>

 <h2 className="mb-3">Our Approach to Engagement</h2>

<p> The YMIM works to enhance participants’ global perspective of the world economy. Through access and exposure to the arts, healthcare advocacy, sciences, technology, industries, and international mission experiences we aim to enrich the cultural, personal, and professional aspects of each participant. </p>

 <p>We listen to participants, address their concerns, and help connect them with resources to navigate life. We help participants develop life skills necessary to thrive as the masterbuilder of their future.</p>

<p>Our approach includes models and scenarios of self-direction that cover a broad span on topics of visioning life goals, decision making, and self-sufficiency. Additionally, we help participants mature in accountability and leadership through peer-to-peer mentoring and workshops on the precepts and concepts of entrepreneurship, sustained employment, global community service activities and more.

**Our Road to Impactful Programming**

Alumnae input and feedback are the drivers of ongoing program enhancements. Our pre and post self assessments provide our guideposts to impactful programming. Participants of each age segment serve on ideation and planning committees. Participant-centered needs is how we determine where to prioritize cultural, education, life skills, and employment programming. 

**Resources and Referrals**

We link participants to resources and services beyond our capacity for those desiring or requiring additional support.  </p>
{/* 
**Join us!**

[Enroll ](/enrollment/)today for the 2019 cohort. Applications are now being accepted. Qualifications are for young women, who are orphans, adoptees, and foster youth alumnae up to age 30\. Referrals and recommendations are welcome.

**Ambassador Sponsorships Available**

We welcome your thoughtful and generous contributions. Let us know which area(s) you are best able to support: operations, logistics, academic tutoring, curriculum planning, employment readiness, women’s healthcare advocacy, marketing, public relations, missions service trips, or fundraising.

The **YMIM** welcomes your time, talent, and treasure. Every financial and in-kind gift is applied to our core programs – helping young women build resiliency, hope, and a bright future. 

The Young Masterbuilders in Motion, Inc., is a 501(c)(3) charitable organization and your financial contributions are deductible to the full extent of the law.

Consider becoming a [sponsor](/become-a-sponsor/) on behalf of foster alumnae today. Your recurring or one-time tax deductible gifts matters!

[Contact us now!](/contact-us/) */}


</div>
<div className="lowermid "> 
   <div className="container clear">
    <h1>Our People</h1>
   <img className="floatimg" src="http://www.randolphcountync.gov/portals/0/Images/gray4.png?ver=2018-02-19-154405-587" />
   <div className="floatp">
  <h1>Kim Wright</h1>
  <h4>Founder,Alumnae Executive Director</h4>
<p>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices nisl in consectetur ultricies. Sed a vestibulum purus, et consequat risus. Aliquam dapibus vestibulum elit. Nullam interdum consectetur nulla, eget faucibus tellus suscipit a. Ut bibendum efficitur suscipit. Maecenas euismod diam non nibh scelerisque, sed cursus leo ullamcorper. Morbi laoreet eros sit amet tempor fringilla. Fusce bibendum sollicitudin consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris at varius orci. Nullam mattis vulputate nibh.

Etiam porttitor tempus tortor vel finibus. Sed a lacus placerat nisi efficitur aliquam. Aliquam et purus sapien. In ut lorem vulputate, feugiat erat non, pharetra justo. Pellentesque finibus, sem at consequat molestie, erat quam molestie est, tincidunt placerat orci purus cursus orci. Duis maximus orci at risus venenatis, non fringilla nisi sodales. Proin odio nunc, ornare eget auctor eu, interdum at ante. Sed tempus facilisis arcu ac imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec feugiat sem ac tristique dapibus. Pellentesque id nulla augue. Sed vulputate felis et dictum porta. Cras quis placerat ipsum. Vestibulum id eros lectus. Nulla id semper nulla.</p>

</div>
   </div> 
</div>


<div className="clear">
    <div className="container clear ">
    <img className="floatimg" src="http://www.randolphcountync.gov/portals/0/Images/gray4.png?ver=2018-02-19-154405-587" />

    <div className="floatp">
  <h1>Kim Wright</h1>
  <h4>Founder,Alumnae Executive Director</h4>
<p>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices nisl in consectetur ultricies. Sed a vestibulum purus, et consequat risus. Aliquam dapibus vestibulum elit. Nullam interdum consectetur nulla, eget faucibus tellus suscipit a. Ut bibendum efficitur suscipit. Maecenas euismod diam non nibh scelerisque, sed cursus leo ullamcorper. Morbi laoreet eros sit amet tempor fringilla. Fusce bibendum sollicitudin consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris at varius orci. Nullam mattis vulputate nibh.

Etiam porttitor tempus tortor vel finibus. Sed a lacus placerat nisi efficitur aliquam. Aliquam et purus sapien. In ut lorem vulputate, feugiat erat non, pharetra justo. Pellentesque finibus, sem at consequat molestie, erat quam molestie est, tincidunt placerat orci purus cursus orci. Duis maximus orci at risus venenatis, non fringilla nisi sodales. Proin odio nunc, ornare eget auctor eu, interdum at ante. Sed tempus facilisis arcu ac imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec feugiat sem ac tristique dapibus. Pellentesque id nulla augue. Sed vulputate felis et dictum porta. Cras quis placerat ipsum. Vestibulum id eros lectus. Nulla id semper nulla.</p>

</div>
</div> 
</div>


<div className="lowermid">

  <div className="container clear">


  <img className="floatimg" src="http://www.randolphcountync.gov/portals/0/Images/gray4.png?ver=2018-02-19-154405-587" />
  <div className="floatp">
  <h1>Kim Wright</h1>
  <h4>Founder,Alumnae Executive Director</h4>
<p>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices nisl in consectetur ultricies. Sed a vestibulum purus, et consequat risus. Aliquam dapibus vestibulum elit. Nullam interdum consectetur nulla, eget faucibus tellus suscipit a. Ut bibendum efficitur suscipit. Maecenas euismod diam non nibh scelerisque, sed cursus leo ullamcorper. Morbi laoreet eros sit amet tempor fringilla. Fusce bibendum sollicitudin consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris at varius orci. Nullam mattis vulputate nibh.

Etiam porttitor tempus tortor vel finibus. Sed a lacus placerat nisi efficitur aliquam. Aliquam et purus sapien. In ut lorem vulputate, feugiat erat non, pharetra justo. Pellentesque finibus, sem at consequat molestie, erat quam molestie est, tincidunt placerat orci purus cursus orci. Duis maximus orci at risus venenatis, non fringilla nisi sodales. Proin odio nunc, ornare eget auctor eu, interdum at ante. Sed tempus facilisis arcu ac imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec feugiat sem ac tristique dapibus. Pellentesque id nulla augue. Sed vulputate felis et dictum porta. Cras quis placerat ipsum. Vestibulum id eros lectus. Nulla id semper nulla.</p>

</div>
    </div>
</div>




{/* The form below is a general participant interest form that helps us plan for number and age groups of potential cohort members, not to be confused with the enrollment application that will need to be submitted via email to **Founder@TheYMIM.org** noted above. */}
          </>
    );
  }
}

export default About;
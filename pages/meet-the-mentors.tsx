import MentorBio from '../components/mentor-bio'
import styles from '../styles/meet-the-mentors.module.css'
import Head from 'next/head';
import {Container, Row, Col} from 'react-bootstrap'


/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link href="https://fonts.googleapis.com/css?family=Assistant:400,700" rel="stylesheet">*/

const MeetTheMentors = () => (
    <>
    <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <link href="https://fonts.googleapis.com/css?family=Assistant:400,700" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" type="image/png"></link>
        <link rel="shortcut icon" href="/favicon.ico" type="image/png"></link>
    </Head>
    <Container>
        <Row>
            <Col>
            <h1 className={`${styles.title} my-5`}>meet the mentors</h1>
            </Col>
        </Row>
        <MentorBio picture= '/Carissa.jpg' name='carissa' grade='11th grade' years='3rd year as GirlPower Peer Mentor' interests= 'Interests: reading, baking, painting, spending time with my sister' quote='“I was part of Chrysalis After-School in 6-8th grade and love giving back."'/>
        <MentorBio picture= '/Eliza.jpg' name='eliza' grade='11th grade' years= '2nd year as GirlPower Peer Mentor' interests='Interests: goats, cats, dogs, gardening, and being outside' quote='“One of my favorite things about being a Mentor is all of the connections/friendships I am able to make.”'/>
        <MentorBio picture= '/Ellen.jpg' name='ellen' grade='12th grade' years= '2nd year as GirlPower Peer Mentor' interests='Intersts: finance, running, show choir, mock trial, piano' quote='“GirlPower completes my busy schedule through learning and opportunities to give back! I want to travel to as many new places as possible and am always down for an adventure! I’m also super passionate about increasing the financial literacy of those around me and work to especially empower females in finance to improve future opportunities.”'/>
        <MentorBio picture= '/Hannah.jpg' name='hannah' grade='11th grade' years= '3rd year as GirlPower Peer Mentor' interests='Interests: band, tae kwon do' quote='“I have been involved in Chrysalis After-School since 6th grade. This is where I learned about girl power and about what they do. I decided that I would like to do it to learn more about what they taught us in Chrysalis After-School."'/>
        <MentorBio picture= '/Mia.jpg' name='mia' grade='12th grade' years= '2nd year as GirlPower Peer Mentor' interests='Interests: reading, running, piano, spending time with friends and family' quote='“I first found out about the program through a friend and the more I researched about Chrysalis the more I loved it! It combines my passions for equity and empowering other women and I love getting to work with the rest of the amazing GirlPower team every day.”'/>
        <MentorBio picture= '/Olivia.jpeg' name='olivia' grade='11th grade' years= '2nd year as GirlPower Peer Mentor' interests='' quote=''/>
        <MentorBio picture= '/Tristan.jpg' name='tristan' grade='10th grade' years='2nd year as GirlPower Peer Mentor' interests='Interests: painting, writing, math, and making resin art' quote='“I hope in my future I can inspire younger girls and girls in general to be the best they can be in their life in healthy ways. I own a small business as well, so I am hoping to boost the business! I strive to be a good person and get good grades so I can graduate with a good GPA."'/>
        <MentorBio picture= '/Uma.jpg' name='uma' grade='12th grade' years='2nd year as GirlPower Peer Mentor' interests='Interests: Marvel, piano, family' quote='“I love working with young girls to help them become confident early on. I find teaching about healthy relationships and emotional control an extremely important responsibility because of the implications self-confidence has for the future of these girls.”'/>
        <MentorBio picture= '/Natalie.jpg' name='natalie mcdaniels' grade='college student' years= '4th year as GirlPower Peer (Senior) Mentor' interests='Interests: art and creative outlets' quote='“I am a firm believer that GirlPower is an effective way of not only providing young women with the toolboxes they will need to navigate relationships both current and future, but also as an investment in the future of our community at-large through the potential contributions of our participants. My experience in groups like Girl Power helped empower me to become a first-generation college student."'/>
        <MentorBio picture= '/Dede.JPG' name='docial ‘dede’ vleyee' grade='college student' years= '4th year as GirlPower Peer (Senior) Mentor' interests='Interests: k-pop, fashion, learning, and leadership' quote='"I’m a passionate individual who dreams of making my family proud. I plan on becoming a  public relations professional and owning my own travel company. I love reading and writing poetry. Super talkative, my nickname in middle school was social DOCIAL. I’m definitely going to change the world one issue at a time.”'/>
        
    </Container>
    </>
);

export default MeetTheMentors;
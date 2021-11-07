import styles from '../styles/resources.module.css'
import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap'

const Resources = () => (
    <>
    <Container>
    <h1 className={`${styles.title} my-5`}>resources</h1>
    <p>Chrysalis GirlPower is a violence prevention initiative made possible through a partnership with the Chrysalis Foundation, MercyOne Des Moines, supported by the Commonspirit Health Mission, and Ministry Fund to advance health equity through community response programming. </p>
    <Row className='resources-row'>
        <Col><a href='http://www.chrysalisfdn.org/'> <Image src='/Chrysalis_Logo_green-02 (3).png' width='150' height='124'/> </a> </Col>
        <Col><a href= 'http://www.mercyone.org/'> <Image src='/mercyone-logo-vector.png' width='250' height='124'/> </a></Col>
        <Col><a href= 'https://commonspirit.org/'> <Image src='/CommonSpirit logo.JPG' width='333' height='82.5'/> </a></Col>
    </Row>

    <Row className='resources-row'>
    <h2 className={styles.name}>the curriculum</h2>
    <p>The program is based on the Peaceful Pathways Curriculum, which has been identified as a best practices program by the <a href= "https://www.cdc.gov">Centers for Disease Control and Prevention</a> and research from <a href= "https://www.futureswithoutviolence.org">Futures Without Violence</a>.</p>
    <p>GirlPower Peer Mentors Study the 5 Practices of Exemplary Leadership Model. Learn more at: <a href= "https://www.theleadershipchallenge.org">www.theleadershipchallenge.org </a> </p>
    </Row>
    
    <Row>
    <h2 className={styles.name}>GirlPower Training Partners: </h2>
    <ul style={{marginLeft:'50px'}}>
        <li>Adventures in Social Drama: <a href= "https://www.asdrama.org">www.asdrama.org</a> </li>
        <li>Polk County Department of Public Health:  <a href= "https://www.polkcountyiowa.gov/health-department/">https://www.polkcountyiowa.gov/health-department/</a> </li>
        <li>Crisis Intervention and Advocacy Center: <a href= "https://www.supportingsurvivors.org">www.supportingsurvivors.org</a> </li>
    </ul>
    </Row>
    </Container>
    </>   
);

export default Resources;
import styles from '../styles/meet-the-mentors.module.css'
import Image from 'next/image'
import {Row, Col} from 'react-bootstrap'

export interface MentorBio{
    name: string;
    grade: string;
    years: string;
    interests: string;
    quote: string;
    picture: string;
}

const MentorBio = (props: MentorBio) => (
    <Row className='mentor-bio-row'>
        <Col>
        <Image src={props.picture} width='256' height='338'/>
        </Col>
        <Col>
        <h2 className={styles.name}>{props.name}</h2>
        <p className={styles.grade}>{props.grade}</p>
        <p className={styles.years}>{props.years}</p>
        <p className={styles.interests}>{props.interests}</p>
        <p className={styles.quote}>{props.quote}</p>
        </Col>
        
    </Row>
);

export default MentorBio;
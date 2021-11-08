import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { IMentor } from "../../@types/generated/contentful";
import styles from '../../styles/meet-the-mentors.module.css'

type MentorPreviewProps = {
  entry: IMentor;
};

const MentorPreview: React.FC<MentorPreviewProps> = ({ entry }) => {
  const image = entry.fields.image;

  return (
    <Row className="mentor-bio-row">
      <Col>
        <Image
          src={`https:${image.fields.file.url}`}
          alt={image.fields.description}
          width="256"
          height="338"
        />
      </Col>
      <Col>
        <h2 className={styles.name}>{entry.fields.name}</h2>
        <p className={styles.grade}>{entry.fields.experience}</p>
        <p className={styles.interests}>Interests: {entry.fields.interests}</p>
        <p className={styles.quote}>{documentToReactComponents(entry.fields.bio)}</p>
      </Col>
    </Row>
  );
};

export default MentorPreview;

import Image from 'next/image'
import { IMentor } from "../../@types/generated/contentful";

type MentorPreviewProps = {
  entry: IMentor;
};

const MentorPreview: React.FC<MentorPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.name} with image 
      <div style={{height: '20vh', width: '300px', position: 'relative'}}>
        <Image
          src={`https:${entry.fields.image.fields.file.url}`} 
          alt={entry.fields.image.fields.description}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </p>
  );
};

export default MentorPreview;

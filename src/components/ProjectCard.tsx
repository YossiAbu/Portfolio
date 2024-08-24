import { Col } from "react-bootstrap";
import githubLogo from '../assets/img/github2.png';  // Ensure you have a GitHub icon image

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  githubUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubLogo} alt="GitHub Repository" className="github-icon" />
          </a>
        </div>
      </div>
    </Col>
  );
};

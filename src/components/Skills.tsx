import TrackVisibility from 'react-on-screen';
import { SkillItem } from './SkillItem';
// Import icons from react-icons
import { FaHtml5, FaCss3Alt, FaReact, FaNode , FaDatabase, FaJenkins, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiTypescript, SiExpress, SiPython } from "react-icons/si";
import { MdOutlineDataThresholding } from "react-icons/md";
import { RiDatabaseLine } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { GiProcessor } from "react-icons/gi";


export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-heading">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__bounce": ""}>
              <h1 className="title">Skills</h1>       
            </div>}
        </TrackVisibility>
      </div>
      <div className="skills-details-container">
        <div className="details-container">
          <h2 className="skills-sub-title">Full stack</h2>
          <div className="line"></div>
          <div className="article-container">
            <SkillItem title="HTML" level="Experienced" IconComponent={FaHtml5} />
            <SkillItem title="CSS" level="Basic" IconComponent={FaCss3Alt} />
            <SkillItem title="TypeScript" level="Basic" IconComponent={SiTypescript} />
            <SkillItem title="React" level="Intermediate" IconComponent={FaReact} />
            <SkillItem title="Node JS" level="Basic" IconComponent={FaNode} />
            <SkillItem title="Express JS" level="Basic" IconComponent={SiExpress} />
            <SkillItem title="SQL/NoSQL Database" level="Basic" IconComponent={FaDatabase} />
            <SkillItem title="CI/CD" level="Basic" IconComponent={FaJenkins} />
          </div>
        </div>
        <div className="details-container">
          <h2 className="skills-sub-title">Data Science & General</h2>
          <div className="line"></div>
          <div className="article-container">
            <SkillItem title="Python" level="Experienced" IconComponent={SiPython} />
            <SkillItem title="Data Processing" level="Intermediate" IconComponent={RiDatabaseLine} />
            <SkillItem title="Data Visualization" level="Basic" IconComponent={MdOutlineDataThresholding} />
            <SkillItem title="Machine Learning" level="Intermediate" IconComponent={LuBrainCircuit} />
            <SkillItem title="Deep Learning" level="Basic" IconComponent={GiProcessor} />
            <SkillItem title="Web Scraping" level="Basic" IconComponent={BsGlobe} />
            <SkillItem title="Git" level="Intermediate" IconComponent={FaGitAlt} />
            <SkillItem title="Linux" level="Basic" IconComponent={FaLinux} />
          </div>
        </div>
      </div>
    </section>
  );
};

import TrackVisibility from 'react-on-screen';
import { SkillItem } from './SkillItem'

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
            <SkillItem title="HTML" level="Experienced" />
            <SkillItem title="CSS" level="Basic" />
            <SkillItem title="TypeScript" level="Basic" />
            <SkillItem title="React" level="Intermediate" />
            <SkillItem title="Node JS" level="Basic" />
            <SkillItem title="Express JS" level="Basic" />
            <SkillItem title="SQL/NoSQL Database" level="Basic" />
            <SkillItem title="CI/CD" level="Basic" />
          </div>
        </div>
        <div className="details-container">
          <h2 className="skills-sub-title">Data Science & General</h2>
          <div className="line"></div>
          <div className="article-container">
            <SkillItem title="Python" level="Experienced" />
            <SkillItem title="Data Processing" level="Intermediate" />
            <SkillItem title="Data Visualization" level="Basic" />
            <SkillItem title="Machine Learning " level="Intermediate" />
            <SkillItem title="Deep Learning" level="Basic" />
            <SkillItem title="Web Scraping" level="Basic" />
            <SkillItem title="Git" level="Intermediate" />
            <SkillItem title="Linux" level="Basic" />

          </div>
        </div>
      </div>
    </section>
  );
};

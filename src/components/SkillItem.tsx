import React from 'react';
import checkmark from '../assets/img/checkmark.png';

type SkillItemProps = {
  title: string;
  level: string;
  IconComponent: React.ElementType;
};

export const SkillItem: React.FC<SkillItemProps> = ({ title, level, IconComponent }) => {
  return (
    <article className="skill-item">
      <img src={checkmark} alt="Experience icon" className="checkmark-icon" />
      <div className="text-container">
        <h3>{title}</h3>
        <p>{level}</p>
      </div>
      <div className="icon-container">
        <IconComponent className="skill-icon" />
      </div>
    </article>
  );
};

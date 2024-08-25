import checkmark from '../assets/img/checkmark.png'

type SkillItemProps = {
    title: string;
    level: string;
    IconComponent: React.ElementType;
}

export const SkillItem:React.FC<SkillItemProps> = ({title, level, IconComponent}) => {
    return (
        <article>
            <img src={checkmark} alt='Experience icon' className='icon'/>
            <div className='text-container'>
                <h3>{title}</h3>
                <p>{level}</p>
            </div>
            <div className="icon-container">
                <IconComponent className="skill-icon" />
            </div>
        </article>
    );
};
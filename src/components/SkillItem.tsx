import checkmark from '../assets/img/checkmark.png'

type SkillItemProps = {
    title: string;
    level: string
}

export const SkillItem:React.FC<SkillItemProps> = ({title, level}) => {
    return (
        <article>
            <img src={checkmark} alt='Experience icon' className='icon'/>
            <div>
                <h3>{title}</h3>
                <p>{level}</p>
            </div>
        </article>
    );
};
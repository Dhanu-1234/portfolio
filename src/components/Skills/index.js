
import SkillItem from '../SkillItem'
import './index.css'

const skills = [
    {
        id: 1,
        name: 'Python',
        imageUrl: 'https://i.pinimg.com/originals/e0/bc/9d/e0bc9ddc19834caa1dbe69d5653fe261.png'
    },
    {
        id: 2,
        name: 'HTML',
        imageUrl: 'https://imagetolink.com/ib/bKwKEr2v0y.png'
    },
    {
        id: 3,
        name: 'CSS',
        imageUrl: 'https://logospng.org/download/css-3/logo-css-3-2048.png'
    },
    {
        id: 4,
        name: 'JavaScript',
        imageUrl: 'https://imagetolink.com/ib/Fb30sSI5sJ.png'
    },
    {
        id: 5,
        name: 'React JS',
        imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236966/reactjs-icon-md.png'
    },
    {
        id: 6,
        name: 'Node JS',
        imageUrl: 'https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png'
    },
    {
        id: 7,
        name: 'SQLite',
        imageUrl: 'https://logos-download.com/wp-content/uploads/2018/09/SQLite_Logo.png'
    }
]

const Skills = () => (
    <div className="skills-container">
        <ul className="skills-list">
            {skills.map(eachObj => <SkillItem key={eachObj.id} skill={eachObj} />)}
        </ul>
    </div>
)

export default Skills

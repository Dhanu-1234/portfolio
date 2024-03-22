import './index.css'

const SkillItem = props => {
    const {skill} = props
    const {name, imageUrl} = skill

    return (
        <li className="skill-item">
            <img src={imageUrl} alt="skill" className="skill-img-styles"/>
            <h4 className="skill-name">{name}</h4>
        </li>
    )
}

export default SkillItem

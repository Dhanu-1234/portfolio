import './index.css'
import handImg from './Hand.png'
import vector2 from './Vector2.png'
import vector3 from './Vector3.png'
import vector4 from './Vector4.png'

const About = () => (
    <div className="about-container">
        <div className="hand-img-bg-container">
            <img src={handImg} alt="hand" className="hand-img-styles" />
        </div>
        <div className='about-content-container'>
        <div className="about-heading-container">
            <h2 className="about-heading">This is it. ;) </h2>
            <hr className="line-styles"/>
        </div>
        <p className="about-description">
            I am a dedicated developer with a passion for crafting engaging and dynamic content.
            With a keen eye for detail and a creative mindset, I specialize in creating immersive
            experiences that captivate audiences and drive engagement. Whether it's designing interactive
            Websites, developing compelling multimedia applications, or crafting engaging user interfaces,
            I thrive on bringing ideas to life through innovative content creation.
        </p>
        <div className="vector3-4-container">
            <img src={vector3} alt="" className="vector-3" />
            <hr className="line-styles-2"/>
            <img src={vector4} alt="vector4" className="vector-4"/>
        </div>
        </div>
        <div className="vector-2-container">
            <img src={vector2} alt="" className="vector-2"/>
        </div>
    </div>
)

export default About 

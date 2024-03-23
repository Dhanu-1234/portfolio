import ThemeContext from '../../context/ThemeContext'
import profileImage from './Hero Image.png'
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import './index.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

const Home = (props) => (
    <ThemeContext.Consumer>
        {value => {
            const {isDark} = value
            const borderColor = isDark === true ? 'light-border':'dark-border'

            const onNavigateContact = () => {
                const {history} = props
                history.replace('/contact')
            }
        
            return (
            <div className='content-container'>
                <div className='social-media-icons-container'>
                    <ul className='social-media-icons-list'>
                        <li className='icon-item'><FaFacebook size={25}/></li>
                        <li className='icon-item'><BsInstagram size={25}/></li>
                        <li className='icon-item'><FaTwitter size={25} /></li>
                        <li className='icon-item'><FaGithub size={25} /></li>
                        <li className='icon-item'><BsLinkedin size={25}/></li>
                        <li className='icon-item'><FaTelegram size={25} /></li>
                    </ul>
                </div>
                <div className='greetings-container'>
                    <p className='greeting-msg'>Hello!</p>
                    <p className='name'>I'm <span className={`highlighted-name ${borderColor}`}>Anish</span> <img src="https://whatemoji.org/wp-content/uploads/2020/07/Waving-Hand-Emoji-1024x1024.png" alt="hand emoji" className='hand-emoji'/></p>
                    <p>UI/UX Designer & Frontend Developer</p>
                    <button type="button" className='resume-btn'>Download CV</button>
                    <button className="get-in-touch-btn" onClick={onNavigateContact}>Get in Touch!</button>
                </div>
                <div className="profile-container">
                    <img src={profileImage} alt="profile" className='profile-img-styles'/>
                </div>
            </div>
        )}
        
        }
    </ThemeContext.Consumer>
)
export default Home

import profileImage from './profile.jpeg'
import './index.css'

const Home = (props) => {
    const onNavigateResume = () => {
        const {history} = props
        history.replace('/resume')
    }

    const onNavigateContact = () => {
        const {history} = props
        history.replace('/contact')
    }

    return (
    <div className='content-container'>
        <div className='greetings-container'>
            <p className='greeting-msg'>Hello!</p>
            <h3>I'm Dhanumjai,</h3>
            <h1 className='role'>Full Stack Developer</h1>
            <button type="button" className='resume-btn' onClick={onNavigateResume}>Resume</button>
            <button className="get-in-touch-btn" onClick={onNavigateContact}>Get in Touch!</button>
        </div>
        <div className="profile-container">
            <img src={profileImage} alt="profile" className='profile-img-styles'/>
        </div>
    </div>
)}

export default Home

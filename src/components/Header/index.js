import {Link, withRouter} from 'react-router-dom'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Header = (props) => (
    <ThemeContext.Consumer>
        {value => {
            const {isDark, changeTheme} = value
            const navLinkStyles = isDark === true ? 'nav-link-dark':'nav-link-light'
            const {location} = props
            const {pathname} = location
            const homeTab = pathname === '/' ? 'active-tab': navLinkStyles
            const aboutTab = pathname === '/about' ? 'active-tab': navLinkStyles
            const resumeTab = pathname === '/resume' ? 'active-tab': navLinkStyles
            const skillsTab = pathname === '/skills' ? 'active-tab': navLinkStyles
            const projectsTab = pathname === '/projects' ? 'active-tab': navLinkStyles
            const contactTab = pathname === '/contact' ? 'active-tab': navLinkStyles

            const onChangeTheme = () => {
                changeTheme()
            }

            return (
                <nav className='header'>
                    <div className='logo-container'>
                        <Link to="/">
                            <img src="https://logodix.com/logo/60724.png" alt="website logo" className='logo-styles'/>
                        </Link>
                        <h3 className='heading'>Dhanumjai Sarnala</h3>
                    </div>
                    <button type="button" className='mob-theme-change-button' onClick={onChangeTheme}>
                            {isDark === true ? <MdLightMode className='light-icon'/> : <MdDarkMode className='dark-icon'/>}
                        </button>
                    <div className='options-container'>
                        <ul className='options-list'>
                            <li className='option-item'>
                                <Link to="/" className={homeTab}>Home</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/resume" className={resumeTab}>Resume</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/skills" className={skillsTab}>Skills</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/projects" className={projectsTab}>Projects</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/about" className={aboutTab}>About</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/contact" className={contactTab}>Contact</Link>
                            </li>
                        </ul>
                        <button type="button" className='theme-change-button' onClick={onChangeTheme}>
                            {isDark === true ? <MdLightMode className='light-icon'/> : <MdDarkMode className='dark-icon'/>}
                        </button>
                    </div>
                </nav>
            )
        }}
    </ThemeContext.Consumer>
)

export default withRouter(Header)

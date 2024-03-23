import {Link, withRouter} from 'react-router-dom'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { BsFillMoonStarsFill } from "react-icons/bs"
import ThemeContext from '../../context/ThemeContext'
import lightLogo from './Logo.svg'
import darkLogo from './Logo.png'
import './index.css'

const Header = (props) => (
    <ThemeContext.Consumer>
        {value => {
            const {isDark, changeTheme} = value
            const navLinkStyles = isDark === true ? 'nav-link-dark':'nav-link-light'
            const logo = isDark === true ? darkLogo : lightLogo

            const onChangeTheme = () => {
                changeTheme()
            }

            return (
                <nav className='header'>
                    <div className='logo-container'>
                        <Link to="/">
                            <img src={logo} alt="website logo" className='logo-styles'/>
                        </Link>
                        <h3 className='heading'>Anish Kumar Sinha</h3>
                    </div>
                    <button type="button" className='mob-theme-change-button' onClick={onChangeTheme}>
                            {isDark === true ? <MdLightMode className='light-icon'/> : <MdDarkMode className='dark-icon'/>}
                        </button>
                    <div className='options-container'>
                        <ul className='options-list'>
                            <li className='option-item'>
                                <Link to="/" className={navLinkStyles}>Home</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/about" className={navLinkStyles}>About</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/resume" className={navLinkStyles}>Resume</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/skills" className={navLinkStyles}>Skills</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/projects" className={navLinkStyles}>Projects</Link>
                            </li>
                            <li className='option-item'>
                                <Link to="/contact" className={navLinkStyles}>Contact</Link>
                            </li>
                        </ul>
                        <button type="button" className='theme-change-button' onClick={onChangeTheme}>
                            {isDark === true ? <MdLightMode className='light-icon' /> : <BsFillMoonStarsFill className='dark-icon'/>}
                        </button>
                    </div>
                </nav>
            )
        }}
    </ThemeContext.Consumer>
)

export default withRouter(Header)

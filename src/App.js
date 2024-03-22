import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Component } from 'react'
import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

class App extends Component {
  state = {isDark: false}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const bgTheme = isDark === true ? 'dark-theme':'light-theme'
    return (
      <ThemeContext.Provider value={{
        isDark,
        changeTheme: this.changeTheme
      }}>
        <div className={`bg-container ${bgTheme}`}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
        </div>
      </ThemeContext.Provider>
)}
}
export default App 

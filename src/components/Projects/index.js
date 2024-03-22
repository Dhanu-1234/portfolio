import ProjectItem from '../ProjectItem'
import './index.css'

const projects = [
    {
        id: 1,
        name: 'Fruits Counter',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/fruits-counter-img.png'
    },
    {
        id: 2,
        name: 'Gallery App',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/gallery-app-img.png'
    },
    {
        id: 3,
        name: 'Blog List',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/blogs-list-img.png'
    },
    {
        id: 4,
        name: 'Emoji Game',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png'
    },
    {
        id: 5,
        name: 'App Store',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/app-store-img.png'
    }
]

const Projects = () => (
    <div className="projects-container">
        <ul className="projects-list">
            {projects.map(eachObj => <ProjectItem key={eachObj.id} projectDetails={eachObj} />)}
        </ul>
    </div>
)

export default Projects

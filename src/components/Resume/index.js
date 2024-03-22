import './index.css'

const Resume = () => (
    <div className="resume-container">
        <div className="resume-about-container">
            <h1>Dhanumjai Sarnala</h1>
            <p>Eluru, Andhra Pradesh, 534426 | 9490799572 <a href="https://www.linkedin.com/in/dhanumjai-sarnala" className="anchor-link">linkedin.com/in/dhanumjai-sarnala</a>
            <a href="https://www.github.com/Dhanu-1234" className="anchor-link">github.com/Dhanu-1234</a>
            </p>
        </div>
        <div className="education-container">
            <h3 className="mini-heading">EDUCATION</h3>
            <hr />
            <p className="college-name"><span>Nxtwave Disruptive Technologies</span> <span>Jul 2022 - Ongoing</span></p>
            <p className="description">Industry Ready Certification in Full-Stack Development</p>
            <p className="college-name"><span>Helapuri Institue of Science and Technology, Eluru</span> <span>2023 - 2026</span></p>
            <p className="description">B Tech(Bachelor of Technology)_Computer Science Engineering(CSE)</p>
            <p className="college-name"><span>Sir CR Reddy Polytechnic, Eluru</span> <span>2020 - 2023</span></p>
            <p className="description">Diploma_Computer Science Engineering(CSE)</p>
            <p className="college-name"><span>St.Xavier's EM High School, Rallakunta</span> <span>2019 - 2020</span></p>
            <p className="description">Secondary Scool Of Certificate</p>
        </div>
        <div className="education-container">
            <h3 className="mini-heading">SKILLS</h3>
            <hr />
            <p><span className="highlighted-text">Frontend:</span> HTML, CSS, Bootstrap, JavaScript, React.js</p>
            <p><span className="highlighted-text">Backend:</span> Python, Express, Node.js</p>
            <p><span className="highlighted-text">Database:</span> SQLite</p>
        </div>
        <div className="education-container">
            <h3 className="mini-heading">PROJECTS</h3>
            <hr />
            <p><span className="highlighted-text">Tourism Website</span>(<a href="https://touristplaces23.ccbp.tech">touristplaces23.ccbp.tech</a>)</p>
            <p>Built a captivating online resource where users can access multimedia and insightful details about popular travel spots</p>
            <p><span className="highlighted-text">Food Munch</span>(<a href="https://restaurant23.ccbp.tech">restaurant23.ccbp.tech</a>)</p>
            <p>Built a captivating online resource where users can access multimedia and insightful details about popular travel spots</p>
        </div>
    </div>
)

export default Resume
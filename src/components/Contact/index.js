import './index.css'

const Contact = () => (
    <div className="contact-container">
        <div className="contact-content">
            <h2>Get In Touch</h2>
            <p className="details">
                <span className="highlighted-text">Email</span>: <a href='https://dhanudhanumjai999@gmail.com'>dhanudhanumjai999@gmail.com</a>
            </p>
            <p className="details">
                <span className="highlighted-text">Linkedin</span>: <a href="https://www.linkedin.com/in/dhanumjai-sarnala" className="anchor-link">linkedin.com/in/dhanumjai-sarnala</a>
            </p>
            <p className="details">
                <span className="highlighted-text">Github</span>: <a href="https://www.github.com/Dhanu-1234" className="anchor-link">github.com/Dhanu-1234</a>
            </p>
            <p>
            To get in touch with me, feel free to reach out via email at 
            <span className='highlighted-text'> dhanudhanumjai999@gmail.com</span>. You can also connect with me on LinkedIn 
            <span className='highlighted-text'> linkedin.com/in/dhanumjai-sarnala</span> for professional inquiries
            and networking opportunities. I welcome any collaboration or 
            discussion about potential projects, so don't hesitate to contact me.
            Looking forward to hearing from you!
            </p>
        </div>
    </div>
)

export default Contact
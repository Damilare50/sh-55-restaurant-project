import about from "../images/about.jpg";
import "../styles/About.css";
import { FaCheckCircle } from 'react-icons/fa';

const AboutBody = () => {
  return (
    <section className="About-body">
      <div className="about-text">
        <h2>Voluptatem dignissimos provident quasi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint dignissimos itaque molestias nam veritatis placeat vitae, maiores doloribus dolorum.</p>
        <p><FaCheckCircle className="circle-icon" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus.</p>
        <p><FaCheckCircle className="circle-icon" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis!</p>
        <p><FaCheckCircle className="circle-icon" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fugit. Quas veniam minus itaque sint.</p>
      </div>
      <div className="image-container">
        <img src={about} alt="about" className="About-image" />
      </div>
    </section>
  )
}

const ChooseUsCard = ({no, header, details}) => {
  return (
    <div className="card">
      <h3>{no}</h3>
      <h3>{header}</h3>
      <p>{details}</p>
    </div>
  )
}

const ChooseUs = () => {
  return (
    <section className="choose-us">
      <h2>Why Choose Our Restaurant</h2>
      <article className="card-container">
        <ChooseUsCard no={1} header="Lorem Ipsum" details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem magnam tenetur maxime aut optio!" />
        <ChooseUsCard no={2} header="Repellat Nihil" details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem magnam tenetur maxime aut optio!" />
        <ChooseUsCard no={3} header="Ad ad velit qui" details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem magnam tenetur maxime aut optio!" />
      </article>
    </section>
  )
}

const About = () => {
  return (
    <>
      <AboutBody />
      <ChooseUs />
    </>
  );
};

export default About;

import about from "../images/about.jpg";

const About = () => {
  return (
    <section className="About-body">
      <div className="about-text">
        <h2>Voluptatem dignissimos provident quasi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit. Ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
          pariatur. Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </p>
      </div>
      <div className="image-container">
        <img src={about} alt="about" className="About-image" />
      </div>
    </section>
  );
};

export default About;

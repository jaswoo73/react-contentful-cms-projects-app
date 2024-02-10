import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio
            esse officia cumque sunt molestiae nihil dolores ipsum! Quas
            reprehenderit accusantium eveniet? Molestias mollitia maxime vero
            iure quidem placeat quas?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="human and browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;

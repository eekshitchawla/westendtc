import about from "../../assets/aboutUs.png";
import "./About.css";
const About = () => {
  return (
    <div id="about-container">
      <h1 id="about-heading"> ABOUT US </h1>
      <img id="about-img" src={about} alt="about us" />
      <p id="about-content">
        The Society was formally instituted in the year 1986 and has since
        accomplished a span of 37 years in unwavering service to its esteemed
        members. The primary objective of the Society revolves around the
        cultivation and enhancement of a culture of prudent Savings amongst its
        membership, further augmented by the provision of judicious loans
        intended for productive ends. This overarching mission is underpinned by
        an ultimate aspiration to elevate the quality of life for all affiliated
        members.
        <br /> <br /> Continuing on an unwavering trajectory of advancement, the
        Society steadfastly endeavors to not only fulfill but also surpass the
        expectations of its membership. This steadfast commitment remains deeply
        rooted in the venerable traditions and principles of cooperation,
        echoing a resolute dedication to the collective spirit. Notably, the
        Society stands duly registered under the purview of the Multi-state
        Cooperative Societies Act and its associated regulations.
        <br /> <br /> As the journey persists, the Society remains resolute in
        its pursuit of excellence, acting as a beacon of reliability,
        cooperation, and progress for its cherished members.
      </p>
    </div>
  );
};

export default About;

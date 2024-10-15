import Header from "../Components/Header";
import "./Page.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="Ab-main">
        <div className="cntnt">
          <h1 id="hding">Our Story</h1>
          <div className="linetxt">
            <p className="txt">
              Welcome to Asikh Nursery, a ​legacy of many years in Hajipur
              ​Bihar dedicated to enriching lives ​through greenery. Our mission
              is ​to plant hope everywhere, ensuring ​fresh oxygen and health
              for all. We ​pride ourselves on our superior ​quality products and
              meticulous ​care, striving to keep our ​customers happy and
              connected ​every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div className="Ab-main2">
        <div className="abimg-1"></div>
        <div className="abimg-2"></div>
      </div>
    </>
  );
};

export default About;

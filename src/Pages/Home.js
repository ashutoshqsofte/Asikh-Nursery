import "./Page.css";
import "./Responsive.css";

const Home = () => {
  return (
    <>
      <div className="img-main">
        <center>
          <h1 id="txt">Fresh Product Deliver</h1>
        </center>
      </div>
      <div className="clrpag">
        <div className="txtnm">
          <p>
            Plants are the earth's gentle caretakers, offering fresh air,
            beauty, and life to every corner they touch. By planting a tree
            today, we invest in a healthier, greener future for generations to
            come.
          </p>
          <center>
            <a href="/plant">
              <button className="btnplnt">Plant Care Guide</button>
            </a>
          </center>
        </div>
        <div>
          <img className="smlimg" src={"./images/img2.jpg"} alt="description" />
        </div>
      </div>
    </>
  );
};

export default Home;

import Header from "../Components/Header";

const Plant = () => {
  return (
    <>
      <Header />
      <div className="plntpag">
        <div className="txtnmP">
          <h1 className="headP">Plant Care:</h1>
          <p className="animatePtxt">
            To care for a plant effectively, ensure it receives the right amount
            of sunlight based on its needs, and water it regularly without
            overwatering. Use well-draining soil and provide appropriate
            nutrients through fertilizer during the growing season.
            Additionally, periodically check for pests and diseases, and prune
            any dead or damaged leaves to promote healthy growth.
          </p>
        </div>
        <div>
          <img
            className="smlimgP"
            src={"./images/Asparagus(plant).jfif"}
            alt="description"
          />
        </div>
      </div>

      <div className="plntpag2">
        <div className="txtnmP2">
          <h1 className="headP2">Points-</h1>
          <p className="animatePtxt2">
            Sunlight: Most plants need sunlight to thrive, but the amount
            varies. Some prefer full sun, while others do well in partial or
            indirect light. Make sure you know the light needs of your specific
            plant and place it accordingly.
          </p>
          <p className="animatePtxt2">
            Watering: Water your plants based on their individual needs. Some
            plants like to dry out between waterings, while others need
            consistently moist soil. Avoid overwatering as it can lead to root
            rot.
          </p>
          <p className="animatePtxt2">
            Soil: Healthy soil is the foundation of plant growth. Use
            well-drained, nutrient-rich soil suitable for the type of plant
            you're growing. Adding compost can boost the soil’s quality and
            promote better growth.
          </p>
        </div>
        <div>
          <img
            className="smlimgP2"
            src={"./images/plnt2.jfif"}
            alt="description"
          />
        </div>
      </div>
    </>
  );
};

export default Plant;

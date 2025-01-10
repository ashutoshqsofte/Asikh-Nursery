import React from "react";
import "./OrderNow.css";
import "./OrderResponsive.css";
import Asparagus from "../ImageProducts/Asparagus.jfif";
import RangonChinese from "../ImageProducts/RangonChinese.jfif";
import TableKaini from "../ImageProducts/TableKaini.jfif";
import Araucariya5 from "../ImageProducts/Araucariya5.jpeg";
import BonsaiFicus35cm from "../ImageProducts/BonsaiFicus35cm.jpeg";
import GoldenShrimp from "../ImageProducts/GoldenShrimp.jpeg";
import greenyonSyngonium from "../ImageProducts/greenyonSyngonium.jpeg";
import LuckyBamboo from "../ImageProducts/LuckyBamboo.jpeg";
import MoneyPlant from "../ImageProducts/MoneyPlant.jpeg";
import OrhulPune from "../ImageProducts/OrhulPune.jpeg";
import RubberPlant from "../ImageProducts/RubberPlant.jpeg";
import ShatavariPlant from "../ImageProducts/ShatavariPlant.jpeg";

const products = [
  {
    id: 1,
    name: "Asparagus",
    price: 0,
    image: Asparagus,
  },
  {
    id: 2,
    name: "Rangon Chinese",
    price: 130,
    image: RangonChinese,
  },
  {
    id: 3,
    name: "Table Kaini",
    price: 130,
    image: TableKaini,
  },
  {
    id: 4,
    name: "Araucariya 5'",
    price: 150,
    image: Araucariya5,
  },
  {
    id: 5,
    name: "Bonsai Ficus (35cm)",
    price: 1400,
    image: BonsaiFicus35cm,
  },
  {
    id: 6,
    name: "Golden Shrimp",
    price: 0,
    image: GoldenShrimp,
  },
  {
    id: 7,
    name: "greenyon Syngonium",
    price: 0,
    image: greenyonSyngonium,
  },
  {
    id: 8,
    name: "Lucky Bamboo",
    price: 370,
    image: LuckyBamboo,
  },
  {
    id: 9,
    name: "Money Plant",
    price: 240,
    image: MoneyPlant,
  },
  {
    id: 10,
    name: "Orhul Pune",
    price: 70,
    image: OrhulPune,
  },
  {
    id: 11,
    name: "Rubber Plant",
    price: 200,
    image: RubberPlant,
  },
  {
    id: 12,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
];

function OrderNow() {
  const handleBuyNow = (product) => {
    const whatsappURL = `https://wa.me/917519935805?text=Hello, I would like to know more about Asikh Nursery.`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <>
      <div className="order-now">
        <h1 className="ord-h">Order Now</h1>
        <a href="/ProduuctsNew.pdf" download className="download-link">
          Download Our Products
        </a>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>Price: ₹{product.price}</p>
              <button
                className="order-button"
                onClick={() => handleBuyNow("product")}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default OrderNow;

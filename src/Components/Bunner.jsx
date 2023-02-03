import "../Styles/css/bunner.css";
import shoesImg from "../resource/pexels-deybson-mallony-5413295-removebg-preview.png";
import clothesImg from "../resource/pink-sweater-front-removebg-preview.png";

const Bunnre = () => {
  return (
    <div className="bunner flex">
      <div className="ads flex">
        <div className="flex">
          <h2>
            The best online Shope <br />
            For you
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
            Illum, fuga consectetur! Totam porro assumenda voluptatem.
          </p>
          <button>Rent now</button>
          <img src={shoesImg} alt="shoesImg" />
        </div>
        <div className="flex">
          <h2>
            The best online Shope <br />
            For you
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            fuga consectetur! Totam porro assumenda voluptatem.
          </p>
          <button>Rent now</button>
          <img src={clothesImg} alt="clothesImg " />
        </div>
      </div>
    </div>
  );
};

export default Bunnre;

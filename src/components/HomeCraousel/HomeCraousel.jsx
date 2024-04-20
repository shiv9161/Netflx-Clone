import React from "react";
import Wallpaper2 from "../../static/wallpaper1.jpg";
import Logo from "../../static/godlogo.png";
import "./style.css";
import { FaPlay } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import Footer from "../Footer/Footer";

const HomeCraousel = () => {
  return (
    <div>
      <img className="img-fluid" src={Wallpaper2} alt="" />
      <div className="container">
        <div>
          <img className="img-fluid poster-logo" src={Logo} alt="poster logo" />
        </div>

        <div>
          <p className="poster-para">2020 | 16+ | 1h 55min | Action</p>
          <p className="poster-line col-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            consequuntur nemo dicta itaque veritatis perferendis, perspiciatis
            porro deserunt dignissimos numquam. Harum in, deserunt autem
            pariatur optio sed voluptatem commodi. Ipsum cum molestias, aperiam!
          </p>
        </div>

        <div className="poster-btn">
          <button className="btn btn-danger" style={{ marginRight: "10px" }}>
            <FaPlay /> PLAY
          </button>
          <button className="btn btn-primary">
            <HiOutlinePlus /> MY LIST
          </button>
        </div>

        <div className="poster-trailer">
          <p className="">
            <FaPlay />
            <b> WATCH TRAILER</b>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeCraousel;

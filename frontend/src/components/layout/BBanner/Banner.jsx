import React from "react";
import "./banner.css";
import image1 from "../../../images/cover.jpg";
import { TbArrowBigDownLines } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="body">
      <div class="slider">
        <input
          name="input-slider"
          id="input-slide-0"
          type="radio"
          class="input-slide input-slide-num"
        />
        <input
          name="input-slider"
          id="input-slide-1"
          type="radio"
          class="input-slide input-slide-num"
        />
        <input
          name="input-slider"
          id="input-slide-2"
          type="radio"
          class="input-slide input-slide-num"
        />
        <input
          name="input-slider"
          id="input-slide-3"
          type="radio"
          class="input-slide input-slide-num"
        />
        <input
          name="input-slider"
          id="input-slide-4"
          type="radio"
          class="input-slide input-slide-num"
        />
        <input
          name="input-slider"
          id="input-slide-5"
          type="radio"
          class="input-slide input-slide-num"
        />
        <input
          name="input-slider"
          id="input-slide-autoplay"
          type="radio"
          class="input-slide"
          checked
        ></input>

        <ul>
          <li class="slide-0"></li>
          <li class="slide-1"></li>
          <li class="slide-2"></li>
          <li class="slide-3"></li>
          <li class="slide-4"></li>
          <li class="slide-5"></li>
        </ul>

        {/* <div class="slide-description">
          <label class="slide-0">
            <h1 class="text-slide">CSS SLIDER #1</h1>
          </label>
          <label class="slide-1">
            <h1 class="text-slide">CSS SLIDER #2</h1>
          </label>
          <label class="slide-2">
            <h1 class="text-slide">CSS SLIDER #3</h1>
          </label>
          <label class="slide-3">
            <h1 class="text-slide">CSS SLIDER #4</h1>
          </label>
        </div> */}

        <div class="slider-arrow-prev">
          <label class="slide-0" for="input-slide-0"></label>
          <label class="slide-1" for="input-slide-1"></label>
          <label class="slide-2" for="input-slide-2"></label>
          <label class="slide-3" for="input-slide-3"></label>
          <label class="slide-4" for="input-slide-3"></label>
          <label class="slide-5" for="input-slide-3"></label>
        </div>
        <div class="slider-arrow-next">
          <label class="slide-0" for="input-slide-0"></label>
          <label class="slide-1" for="input-slide-1"></label>
          <label class="slide-2" for="input-slide-2"></label>
          <label class="slide-3" for="input-slide-3"></label>
          <label class="slide-4" for="input-slide-3"></label>
          <label class="slide-5" for="input-slide-3"></label>
        </div>
        <div class="slider-dot">
          <label class="slide-0" for="input-slide-0"></label>
          <label class="slide-1" for="input-slide-1"></label>
          <label class="slide-2" for="input-slide-2"></label>
          <label class="slide-3" for="input-slide-3"></label>
          <label class="slide-4" for="input-slide-3"></label>
          <label class="slide-5" for="input-slide-3"></label>
        </div>
      </div>
    </div>
  );
};

export default Banner;

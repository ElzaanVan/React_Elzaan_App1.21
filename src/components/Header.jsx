import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAnimateGroup } from "react-simple-animate";
import RotateRightTwoToneIcon from "@material-ui/icons/RotateRight";

function Header() {
  function transOver(e) {
    e.target.style.transform = "rotate(245deg)";
  }
  function transOut(e) {
    e.target.style.transform = "rotate(0deg)";
  }
  function trans2Over(e) {
    e.target.style.transform = "rotate(345deg)";
  }
  function trans2Out(e) {
    e.target.style.transform = "rotate(0deg)";
  }

  const items = ["E", "L", "Z", "A", "A", "N"];
  const { styles, play, isPlaying } = useAnimateGroup({
    sequences: items.map(() => ({
      start: { opacity: 1, transform: "translateY(0)" },
      end: { opacity: 0, transform: "translateY(-10px)" }
    }))
  });

  const [back, setBack] = useState({
    backgroundColor: "white"
  });

  function backgroundHandler() {
    setBack({
      backgroundColor: "blue"
    });
  }

  return (
    <div class="header" style={back}>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img class="cloud1" src="./photos/cloud.png" alt="web developer" />
            <img class="cloud2" src="./photos/cloud.png" alt="web developer" />
            <img
              onMouseOver={transOver}
              onMouseOut={transOut}
              class="square1"
              src="./photos/cube.png"
              alt="web developer"
            />
            <img
              onMouseOver={transOver}
              onMouseOut={transOut}
              class="square2"
              src="./photos/cube.png"
              alt="web developer"
            />
            <img
              class="webdev1"
              src="./photos/responsive-design.png"
              alt="web developer"
            />
            <img
              onMouseOver={trans2Over}
              onMouseOut={trans2Out}
              class="shape1"
              src="./photos/layers.png"
              alt="web developer"
            />
            <img
              onMouseOver={transOver}
              onMouseOut={trans2Out}
              class="code2"
              src="./photos/code.png"
              alt="web developer"
            />
          </div>
          <div class="col-sm">
            {items.map((item, index) => {
              return (
                <h1
                  class="heading"
                  // onMouseOver={play}
                  key={item}
                  style={styles[index]}
                >
                  {item}
                </h1>
              );
            })}
            <h2>FRONT END WEB DEVELOPER</h2>
            <button onClick={() => play(!isPlaying)}>
              <RotateRightTwoToneIcon />
            </button>
            <img
              class="avatar1"
              src="./photos/avatar.png"
              alt="web developer"
            />
          </div>
          <div class="col-sm">
            <img class="cloud3" src="./photos/cloud.png" alt="web developer" />
            <img class="cloud4" src="./photos/cloud.png" alt="web developer" />
            <img
              onMouseOver={transOver}
              onMouseOut={transOut}
              class="square3"
              src="./photos/cube.png"
              alt="web developer"
            />
            <img
              onMouseOver={transOver}
              onMouseOut={transOut}
              class="square4"
              src="./photos/cube.png"
              alt="web developer"
            />
            <img
              class="webdev2"
              src="./photos/responsive-design.png"
              alt="web developer"
            />
            <img
              onMouseOver={trans2Over}
              onMouseOut={trans2Out}
              class="shape2"
              src="./photos/layers.png"
              alt="web developer"
            />
            <img
              onMouseOver={transOver}
              onMouseOut={transOut}
              class="code4"
              src="./photos/code.png"
              alt="web developer"
            />
            <button
              onClick={() => {
                setBack(!back);
              }}
            >
              press
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

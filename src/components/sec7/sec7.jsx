import img8 from "@/assets/IMAGE (19).png";
import gx3 from "@/assets/Frame (17).png";

let btnStyle = {
  backgroundColor: "#0075FF",
  padding: "15px 30px",
  color: "white",
  border: "none",
  borderRadius: "10px",
};

import Btn from "../button/button";

export default function Sec7() {
  return (
    <>
      <section className="sec1 sec7">
        <aside>
          <h1>What makes us different?</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <img src={gx3} className="none noneUl" alt="" />

          <div className="ptq">
            <Btn style={btnStyle}>Get a free quote</Btn>
          </div>
        </aside>

        <img src={img8} className="img8" alt="" />
      </section>
    </>
  );
}

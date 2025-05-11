import img6 from "@/assets/IMAGE (17).png";
import gx3 from "@/assets/Frame (16).png";

let btnStyle = {
  backgroundColor: "#0075FF",
  padding: "15px 30px",
  color: "white",
  border: "none",
  borderRadius: "10px",
};

import Btn from "../button/button";

export default function Sec5() {
  return (
    <>
      <section className="sec1 sec5">
        <img src={img6} className="img6" alt="" />
        <aside>
          <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>

          <p>
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>

          <div>
            <Btn style={btnStyle}>Get a free quote</Btn>
            <img src={gx3} className="gx1 none" alt="" />
          </div>
        </aside>
      </section>
    </>
  );
}

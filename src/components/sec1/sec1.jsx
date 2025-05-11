import img1 from "@/assets/IMAGE (12).png";
import gx1 from "@/assets/Frame (13).png";

let btnStyle = {
  backgroundColor: "#0075FF",
  padding: "15px 30px",
  color:'white',
  border:'none',
  borderRadius:'10px'
};

import Btn from "../button/button";

export default function Sec1() {
  return (
    <>
      <section className="sec1">
        <aside>
          <h1>Quality cleaning for your home</h1>

          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>

          <div>
            <Btn style={btnStyle}>Get a free quote</Btn>
            <img src={gx1} className="gx1 none" alt="" />
          </div>
        </aside>

        <img src={img1} className="img1" alt="" />
      </section>
    </>
  );
}

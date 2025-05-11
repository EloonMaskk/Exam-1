import "./index.css";
import ic1 from "@/assets/IMAGE (13).png";
import ic2 from "@/assets/IMAGE (14).png";
import ic3 from "@/assets/IMAGE (15).png";
import ic4 from "@/assets/IMAGE (16).png";
import gx4 from "@/assets/Frame (18).png";
import gx5 from "@/assets/Frame (19).png";
import gx1 from "@/assets/Frame (13).png";
let btnStyle = {
  backgroundColor: "#0075FF",
  padding: "10px 30px",
  color: "white",
  border: "none",
  borderRadius: "10px",
};
let btnStyle2 = {
  backgroundColor: "white",
  color: "black",
  boxShadow: "0px 0px 5px gray",
  padding: "15px 30px",
  border: "none",
  borderRadius: "10px",
};

import Nav from "./components/nav/nav";
import Sec1 from "./components/sec1/sec1";
import Sec2 from "./components/sec2/sec2";
import Art from "./components/article/article";
import Sec3 from "./components/sec3/sec3";
import Sec4 from "./components/sec4/sec4";
import Sec5 from "./components/sec5/sec5";
import Sec6 from "./components/sec6/sec6";
import Sec7 from "./components/sec7/sec7";
import Btn from "./components/button/button";
export default function App() {
  return (
    <>
      <Nav></Nav>

      <Sec1></Sec1>

      <Sec2>
        <h1>How our service works?</h1>

        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed{" "}
          <br /> neque nisi felis non ultrices massa id egestas quam velit
          pretium nu.
        </p>

        <div>
          <Art>
            <img src={ic1} alt="" />
            <h1>1. Schedule online</h1>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </Art>
          <Art>
            <img src={ic2} alt="" />
            <h1>2. Schedule online</h1>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </Art>
          <Art>
            <img src={ic1} alt="" />
            <h1>3. Schedule online</h1>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </Art>
        </div>
      </Sec2>

      <Sec3></Sec3>

      <Sec4>
        <h1>
          Take a look at our <br /> professional services
        </h1>

        <div>
          <Art>
            <img src={ic3} alt="" />
            <h1>1. Schedule online</h1>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </Art>
          <Art>
            <img src={ic4} alt="" />
            <h1>2. Schedule online</h1>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </Art>
          <Art>
            <img src={ic3} alt="" />
            <h1>3. Schedule online</h1>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </Art>
        </div>
      </Sec4>

      <Sec5></Sec5>

      <Sec6></Sec6>

      <Sec7></Sec7>

      <section className="sec8">
        <div className="head">
          <aside>
            <h1>Articles & resources</h1>
            <p>
              Lobortis mattis odio leo eget mauris <br /> met aliquet semper
              molestie sollicitudin congue massa mauris lectus.
            </p>
          </aside>

          <div className="btns">
            <Btn style={btnStyle}>Get a free quote</Btn>
            <Btn style={btnStyle2}>Browse articles</Btn>
          </div>
        </div>

        <div className="imgs">
          <img src={gx4} className="img9" alt="" />
          <img src={gx5} className="img9" alt="" />
        </div>
      </section>

      <section className="sec9">
        <aside>
          <h1>
            Request a free <br /> cleaning quote today
          </h1>
          <p>
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <img src={gx1} alt="" />

          <Btn style={btnStyle2}>Browse our packages</Btn>
        </aside>

        <form>
          <div className="mainForm">
            <div>
              <label htmlFor="name">Full name</label>
              <br />
              <br />
              <input type="text" id="name" placeholder="fullname...." />
              <br />
              <label htmlFor="adr">Address</label>
              <br />
              <input type="text" id="adr" placeholder="address...." />
              <br />
              <label htmlFor="service">Service</label>
              <br />
              <input type="text" id="service" placeholder="service..." />
              <br />
            </div>
            <div>
              <label htmlFor="numb">Phone Number</label>
              <br />
              <br />
              <input type="tel" id="numb" placeholder="number...." />
              <br />
              <label htmlFor="em">Email</label>
              <br />
              <input type="email" id="em" placeholder="email...." />
              <br />
              <label htmlFor="day">Service</label>
              <br />
              <input type="date" id="day" placeholder="date..." />
              <br />
            </div>
          </div>
          <Btn style={btnStyle}>Submit message</Btn>
        </form>
      </section>

      <footer>
        <ul>
          <li>
            Quality cleaning for <br /> your home
          </li>
          <li>
            Lorem ipsum dolor sit amet cteturdo <br /> adipiscing elit, sed do
            eiusmo.
          </li>
        </ul>

        <ul className="none">
          <li>Contact us</li>
          <li>
            1827 Nickel Road, Los Angeles, <br /> CA, 90017, United States
          </li>
        </ul>

        <ul className="none">
          <li>Hours</li>
          <li>Monday to Friday</li>
          <li>6:00 AM - 9:00 PM</li>
          <li>Saturday & Sunday</li>
          <li>8:00 AM - 8:00 PM</li>
        </ul>
      </footer>
    </>
  );
}

import img7 from "@/assets/IMAGE (18).png";
import gx3 from "@/assets/Frame (16).png";

let btnStyle = {
  backgroundColor: "#0075FF",
  padding: "15px 30px",
  color: "white",
  border: "none",
  borderRadius: "10px",
  windth:'20%'
};

import Btn from "../button/button";

export default function Sec6() {
  return (
    <>
      <section className="sec1 sec5 sec6">
        <img src={img7} className="img6" alt="" />
        <aside>
          <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>

          <p>
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
{/* 
          <divc className='none noneUL'>
            <ul>
                <li>Bathrooms</li>
                <li>Kitchens</li>
                <li>Living Rooms</li>
                <li>Carpets</li>
            </ul>

            <ul>
                <li>Bedrooms</li>
                <li>Offices</li>
                <li>Businesses</li>
                <li>Windows</li>
            </ul>
          </divc> */}

          
            <Btn style={btnStyle}>Get a free quote</Btn>
          
        </aside>
      </section>
    </>
  );
}

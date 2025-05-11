import logo from "@/assets/IMAGE (11).png";
import Btn from "../button/button";

let btnStyle = {
  backgroundColor: "#0075FF",
  padding: "10px 20px",
  color:'white',
  border:'none',
  borderRadius:'10px'
};

export default function Nav() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <ul className="none">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>

        <Btn style={btnStyle}>Get a free quote</Btn>
      </nav>
    </>
  );
}

import img5 from "@/assets/Frame (14).png";
import gx2 from "@/assets/Frame (15).png";

export default function Sec3() {
  return (
    <>
      <section className="sec3">
        <h1>
          Our cleaning services have <br /> no comparison
        </h1>
        <p>
          Lobortis mattis odio leo eget mauris met aliquet semper molestie{" "}
          <br />
          sollicitudin congue massa mauris lectus vitae cras viverra gravida
          sapien.
        </p>
        <img src={gx2} className="gx2 none" alt="" />
        <img src={img5} className="img5" alt="" />
      </section>
    </>
  );
}

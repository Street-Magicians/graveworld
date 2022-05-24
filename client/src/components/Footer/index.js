import Jon from "../../assets/images/team/jon.gif";
import Gwen from "../../assets/images/team/gwen.gif";
import Sarah from "../../assets/images/team/sarah.gif";
import Mousa from "../../assets/images/team/mousa.gif";
import Stephen from "../../assets/images/team/stephen.gif";

const Footer = () => {
  return (
    <footer className="">
      <hr></hr>
      <div className="">
        <p className="">
          Graveworld made with ❤️ and street magic by: <br></br>
          <a
            href="https://github.com/gwenewasko"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Gwen} alt="team pic Gwen" className="portrait"></img>
          </a>{" "}
          <a
            href="https://github.com/Jonchirinos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Jon} alt="team pic Jon" className="portrait"></img>
          </a>{" "}
          <a
            href="https://github.com/mhaddadin1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Mousa} alt="team pic Mousa" className="portrait"></img>
          </a>{" "}
          <a
            href="https://github.com/Sarahlophus"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Sarah} alt="team pic Sarah" className="portrait"></img>
          </a>{" "}
          <a
            href="https://github.com/smarr2198"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Stephen}
              alt="team pic Stephen"
              className="portrait"
            ></img>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

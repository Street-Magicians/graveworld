import Button from "../Button/Button";
import Logo from "../../img/graveworld-logo-real.png";

const Header = () => {
  return (
    <>
      <header className="column d-flex m-regular stack s-between">
        <img
          className="miw-100@sml w-15"
          src={Logo}
          alt="Graveworld Logo"
        ></img>
        <div className="align-center">
          <Button children="Profile" link="/profile" />
          <Button children="Logout" link="/profile" />
        </div>
        {/* <audio
          style={{ visibility: "hidden" }}
          id="audio"
          controls
          autoPlay={true}
          src={Tiger}
          className="center"
        ></audio>
        <button
          className="b-none center align-center font-reg j-center"
          onClick={this.playSong}
        >
          {" "}
          🔇
        </button> */}
      </header>
    </>
  );
};

export default Header;

import Tiger from "./img/Tiger-Tracks_AdobeStock_331814277_preview.m4a";

function playSong() {
  if (document.getElementById("audio").muted === true) {
    document.getElementById("audio").muted = false;
  } else {
    document.getElementById("audio").muted = true;
  }
}

const Nav = () => {
  return (
    <nav>
      <audio
        style={{ visibility: "hidden" }}
        id="audio"
        controls
        autoPlay={true}
        src={Tiger}
      ></audio>
      <button onClick={playSong}>Play/Pause</button>
    </nav>
  );
};

export default Nav;

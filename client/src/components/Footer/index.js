import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="footer p-6 p-absolute-footer b-lavender">
      <div className="content has-text-centered">
        <p className="">
          <strong>Graveworld</strong> made with ❤️ by{" "}
          <a
            href="https://github.com/gwenewasko"
            target="_blank"
            rel="noreferrer"
          >
            Gwen
          </a>
          ,{" "}
          <a
            href="https://github.com/Jonchirinos"
            target="_blank"
            rel="noreferrer"
          >
            Jon
          </a>
          ,{" "}
          <a
            href="https://github.com/mhaddadin1"
            target="_blank"
            rel="noreferrer"
          >
            Mousa
          </a>
          ,{" "}
          <a
            href="https://github.com/Sarahlophus"
            target="_blank"
            rel="noreferrer"
          >
            Sarah
          </a>
          , and{" "}
          <a
            href="https://github.com/smarr2198"
            target="_blank"
            rel="noreferrer"
          >
            Stephen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

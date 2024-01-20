import logo from "/src/assets/logo.png";
import "../styles/Header.css";

function Header({ handleClick }) {
  function pageActive(page) {
    handleClick(page);
  }

  return (
    <>
      <div className="main-container">
        <div className="nav-container">
          <img
            src={logo}
            alt=""
            onClick={() => {
              pageActive("default");
            }}
          />
          <div className="nav-bar">
            <ul>
              <li>
                <a
                  onClick={() => {
                    pageActive("resume");
                  }}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    pageActive("projects");
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    pageActive("skills");
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    pageActive("about");
                  }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

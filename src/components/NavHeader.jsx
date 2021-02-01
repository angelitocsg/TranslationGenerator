import React from 'react';

const NavHeader = ({
  files,
  hasChanges,
  onNewClick,
  onSaveClick,
  onPackJSClick,
  onPackCSharpClick,
}) => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/#">
          Translation Generator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="/#" onClick={onNewClick}>
                  New
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className={hasChanges ? 'nav-link bg-danger' : 'nav-link'}
                  aria-current="page"
                  href="/#"
                  onClick={onSaveClick}>
                  Save
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  aria-current="page"
                  data-bs-toggle="modal"
                  data-bs-target="#importModal"
                  href="/#">
                  Import
                </a>
              </li>
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="btn btn-link  nav-link dropdown-toggle"
                  style={{ boxShadow: 'none' }}
                  id="navbarDarkDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Export
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <a
                      id="download_default"
                      className={files?.default.data ? 'dropdown-item' : 'dropdown-item disabled'}
                      href={files?.default.data}
                      download={files?.default.filename}>
                      {files?.default.name}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <h6 className="dropdown-header">JavaScript</h6>
                  </li>
                  <li>
                    <a
                      className={files?.default.data ? 'dropdown-item' : 'dropdown-item disabled'}
                      href="/#"
                      onClick={onPackJSClick}>
                      Pack JS (with default)
                    </a>
                  </li>
                  {files?.javascript?.map((js, index) => (
                    <li key={index}>
                      <a
                        id={`download_${js.id}`}
                        className="dropdown-item"
                        href={js.data}
                        download={js.filename}>
                        {js.name}
                      </a>
                    </li>
                  ))}

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <h6 className="dropdown-header">C# Resources</h6>
                  </li>
                  <li>
                    <a
                      className={files?.default.data ? 'dropdown-item' : 'dropdown-item disabled'}
                      href="/#"
                      onClick={onPackCSharpClick}>
                      Pack C# (with default)
                    </a>
                  </li>

                  {files?.csharp?.map((cs, index) => (
                    <li key={index}>
                      <a
                        id={`download_${cs.id}_csharp`}
                        className="dropdown-item"
                        href={cs.data}
                        download={cs.filename}>
                        {cs.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/angelitocsg/TranslationGenerator">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default NavHeader;

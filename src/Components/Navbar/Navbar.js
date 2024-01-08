import { Component } from "react";
import './Navbar.css';

export default class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      currentDateTime: new Date()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ currentDateTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { currentDateTime } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsQuik
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <span className="date-time nav-link active">{currentDateTime.toLocaleString()}</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

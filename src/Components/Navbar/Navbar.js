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
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsQuik
            </a>

            {/* Date */}
            <div className="align-items-center">
              <span className="date nav-link active">
                {`${currentDateTime.getDate()}/${currentDateTime.getMonth() + 1}/${currentDateTime.getFullYear()}`}
              </span>
            </div>

            {/* Time */}
            <div className="align-items-center">
              <span className="time nav-link active">
                {`${((currentDateTime.getHours()%12)<10)?'0':''}${currentDateTime.getHours()%12}:${(currentDateTime.getMinutes()<10)?'0':''}${currentDateTime.getMinutes()} ${(currentDateTime.getHours()/12 === 0) ? 'AM' : 'PM' }`}
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

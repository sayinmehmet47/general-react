import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), status: true };
    this.handleStatus = this.handleStatus.bind(this);
  }

  componentDidMount() {
    if (this.state.status) {
      const oneSecond = 1000;
      this.clear = setInterval(() => {
        this.setState({ date: new Date() });
      }, oneSecond);
    }
  }

  handleStatus() {
    this.setState({ status: !this.state.status });

    if (this.state.status) {
      clearInterval(this.clear);
    } else {
      this.clear = setInterval(() => {
        this.setState({ date: new Date() });
      });
    }
  }

  render() {
    console.log(this.state.status);
    return (
      <div className="fs-5 fw-bold text-primary">
        {this.state.date.toLocaleTimeString()}
        <br />
        <button className="btn btn-warning" onClick={this.handleStatus}>
          Tikla
        </button>
      </div>
    );
  }
}

export default Clock;

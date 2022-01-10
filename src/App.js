import React, {Component} from "react"
import Container from 'react-bootstrap/Container';
import Post from './Post.js';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      error: null,
      isLoaded: false,
      items: []
    };

    this.setDate = this.setDate.bind(this)
    this.loadingImage = this.loadingImage.bind(this)
  }

  setDate () {
    var datePicked = document.getElementById("datePicker").value
    this.setState ({
      date: datePicked
    }, () => {this.loadingImage()})    

  }

  loadingImage() {
    if (this.state.date) {
      fetch("https://api.nasa.gov/planetary/apod?api_key=5lyfFNopm9g1iZ8prQ6avveLCX2eubpBBlLkqYR7&date=" + this.state.date)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    } else {
    fetch("https://api.nasa.gov/planetary/apod?api_key=5lyfFNopm9g1iZ8prQ6avveLCX2eubpBBlLkqYR7")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      }
  }

  componentDidMount() {
    this.loadingImage()
  }

  render() {
    const { date, error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <Container fluid>
          <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header text-center lg">SPACESTAGRAM</h1>
          <h5 className="text-center text-secondary mb-4">From the NASA's Astronomy Picture of the Day</h5>
          <input id="datePicker" onChange={this.setDate} type="date" className="mt-2 mb-4 align-items-center"></input>
          <Post info={items} />
          </Container>
        </Container>
        </>
        )
    }

}
}

export default App;

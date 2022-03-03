import React, { Component } from 'react'
import Movies from './Component/Movies';
import Details from './Component/Details';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: ""
    })
  }
  componentDidMount() {
    setInterval(() => {
      fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.setState({
            data: res
          })
        })
    }, 1000);
  }
  //<Route path="/detail" element={<Details/>}/>
  render() {
    console.log(this.state.data)
    return (
      <>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Movies data={this.state.data}/>} />
            <Route path="/details" element={<Details data="fjsdahnfjds"/>} />
          </Routes>
        </BrowserRouter>
      </>

    )
  }
}

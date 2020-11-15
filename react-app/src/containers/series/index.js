import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import './series.css';

class Series extends Component {
    state = {
        series: []
      }
      
      componentDidMount(){
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        .then(response => response.json())
        .then(json => this.setState({ series: json}));
      }

      onSeriesInputChange = e => {
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json}));
          console.log(e);
          console.log(e.target.value);
      }

    render(){
        return (
            <div>
                The length of series array - {this.state.series.length}
                <div>
                    <input type="text" onChange={this.onSeriesInputChange} /> 
                </div>
                <SeriesList list={this.state.series}/>
            </div>
        )
    }
}

export default Series;
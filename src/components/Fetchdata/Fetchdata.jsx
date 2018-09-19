import React, { Component } from "react";

class Fetchdata extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  searchCounties(query) {
    var headers = {
      headers: {
        Authorization: "Bearer jqWKNc6jYfJOZHBVkQOI0Z9AYbfSIN"
      }
    };

    fetch(
      "http://api.kmhfltest.health.go.ke/api/facilities/facilities/?format=json&paging=false&fields=id,name,code",
      headers
    )
      .then(response => response.json())
      .then(findresponse => {
        console.log(findresponse);

        this.setState({
          data: findresponse.results
        });

        for (let i = 0; i < this.state.data.length; i++) {
          var element = this.state.data[i].name;
          if (
            element.indexOf("KI") !== -1 ||
            element.toLowerCase().indexOf("ki") !== -1
          ) {
            console.log(this.state.data[i].name);
          }
        }
      });
  }

  componentWillMount() {
    this.searchCounties();
  }

  render() {
    return (
      <div>
        {this.state.data.map(county => (
          <h3 key={county.id}>{county.name}</h3>
        ))}
      </div>
    );
  }
}
export default Fetchdata;

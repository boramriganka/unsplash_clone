import React from "react";
import unsplash from "../api/Unsplash";
import Searchbar from "./Searchbar";
import CardList from "./CardList";
import "../App.css";
import Header from "./Header";

class App extends React.Component {
  state = {
    images: [],
  };
  

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 30 },
    });
    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="ui container">
            <Header />
            <Searchbar onSubmit={this.onSearchSubmit} />
            <h2>Found: {this.state.images.length} images</h2>
            <CardList images={this.state.images} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
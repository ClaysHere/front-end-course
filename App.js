import React from "react";
import "./App.css";
import Card from "./components/Card";

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    const items = [
      { 
        id: '001',
        title: "Classical Mythology",
        author: "Mark P. O. Morford",
        publisher: "Oxford University",
        year: 2022,
      },
      {
        id: '002',
        title: "Rules of The Wild",
        author: "Francesca Marciano",
        publisher: "Random House Inc",
        year: 1998,
      },
      {
        id:'003',
        title: "Clara Callan",
        author: "Richard Bruce Wright",
        publisher: "HarperFlaminggo Canada",
        year: 2001,
      },
      {
        id:'004',
        title: "Wild Animus",
        author: "Rich Shapero",
        publisher: "Too Far",
        year: 2004,
      },
      {
        id:'005',
        title: "Tage der Unschuld",
        author: "Richard North Patterson",
        publisher: "Goldmann",
        year: 2000,
      },
      {
        id:'006',
        title: "The Hellfire Club",
        author: "Peter Straub",
        publisher: "Random House Inc",
        year: 1996,
      },
      {
        id:'007',
        title: "The Night Listener",
        author: "Armisted Maupin",
        publisher: "HerperCollins Publishers",
        year: 2000,
      },
      {
        id:'008',
        title: "Night Tales",
        author: "Nora Roberts",
        publisher: "Silhouette",
        year: 2000,
      },
    ];
    const allitem = items.map((item) => {
      return (
        <Card
        key={item.id}
          title={item.title}
          author={item.author}
          publisher={item.publisher}
          year={item.year}
        />
      );
    });
    return (
      <React.Fragment>
        <header>
          <div className="inner_header">
            <img
              src="https://www.catalog.style/static/media/catalog_logo.2f0babb5.svg"
              alt="logo"
            />
          </div>
        </header>
        <main>
          <div id="content">
            <input type="text" id="search" placeholder="Search" />
            <div className="filter_container">
              <div className="filter">
                <input
                  defaultChecked
                  defaultValue="title"
                  name="filter"
                  id="title"
                  type="radio"
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="list_book_container">
              <h2>Our Books</h2>
              <hr />
              <div className="list_card_book">
                {allitem}
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

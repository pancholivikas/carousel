import React from 'react';
import { Carousel, AddItems } from './components';
import { carouselDataService } from './service/carousel-data-service';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      addedItems: []
    }
  }

  componentWillMount() {
    carouselDataService().then(data => {
      this.setState({
        items: data
      });
    })
  }



  addItems = (item) => {
    const { addedItems } = this.state;
    if (addedItems.indexOf(item) === -1) {
      addedItems.push(item);
      this.setState({ addedItems });
    }
  }

  clearFilters = () => {
    this.setState({
      addedItems: []
    })
  }

  getFilteredResults = () => {
    const { items, addedItems } = this.state;
    if (addedItems.length === 0) {
      return items;
    }
    const filteredData = items.filter(item => item.categories.some(category => addedItems.indexOf(category) > -1));
    console.log(filteredData);
    return filteredData;
  }

  render() {
    return (
      <div className='container'>
        <AddItems addItems={this.addItems} items={this.state.addedItems} clearFilters={this.clearFilters} />
        <Carousel items={this.getFilteredResults()} />
      </div>
    );
  }
}

export default App;

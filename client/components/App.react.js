import React from 'react';
import Search from '../containers/Search.react';
import SearchData from '../containers/SearchData.react';

class App extends React.Component {
  render() {
    const {location} = this.props;
    return (
      <div>
        <Search location={location}/>
        <SearchData />
      </div>
    );
  };
}

export default App;

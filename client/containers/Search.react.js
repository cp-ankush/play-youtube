import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchYt} from '../actions/SearchAction';
import SearchForm from "./SearchForm";
import ConnectYt from "./ConnectYt";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  // handleChange = (searchValue) => {
  //   this.setState({searchValue});
  // }

  submitForm = (data) => {
    console.log("data:", data);
    const {searchValue, filters} = data;
    const {searchYt} = this.props;
    searchYt(searchValue, filters);
  }

  render() {
    const {location} = this.props;
    return (
      <div className="search">
      {
        localStorage.access_token?
        <div>
          <SearchForm handleChange={this.handleChange}
            onSubmit={this.submitForm}/>
        </div>  :
        <ConnectYt location={location}/>
      }
      </div>
    );
  }
}

function mapStateToProps({accessTokenRequest}) {
  return {
    accessTokenRequest
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({searchYt: searchYt}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);

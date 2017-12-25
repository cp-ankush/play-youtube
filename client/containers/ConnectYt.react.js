import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchYt} from '../actions/SearchAction';
import {connectYt, getAccessToken} from "../actions/ConnectAction";
import _ from "lodash";

class ConnectYt extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const {location} = this.props;
    const query = location? location.query: "";
    const code = query? query.code: "";
    code && this.getAccessToken(code);
  }

  handleClick = () => {
    this.props.connectYt();
  }

  getAccessToken = (code) => {
    this.props.getAccessToken(code);
  }

  render() {
    const {accessTokenRequest} = this.props;
    return (
      <div className="search">
      {
        accessTokenRequest? "Please wait..." :
        <button type="button" className="btn btn-danger"
          onClick={this.handleClick}>
          Connect With Youtube
        </button>
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
  return bindActionCreators({connectYt, getAccessToken}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ConnectYt);

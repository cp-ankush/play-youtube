import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {nextPageSearch} from '../actions/SearchAction';
import SearchForm from "./SearchForm";
import _ from "lodash";

class SearchData extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    $(window).scroll(() => {
      if($(window).scrollTop() == $(document).height() - $(window).height()) {
        this.searchNextPage();
      }
    });
  }

  searchNextPage = () => {
    const {searchDetails, nextPageSearch, form} = this.props;
    const {nextPageToken} = searchDetails;
    const {searchValue, filters} = form.search.values;
    nextPageSearch(nextPageToken, searchValue, filters);
  }

  render() {
    const {searchDetails} = this.props;
    const {data} = searchDetails;
    const noDataFound = _.isEmpty(data);
    return (
      <div className="search-data">
        {
          noDataFound?
          <div className="no-data">
            No data is there
          </div>:
          _.map(data, (item, key) => {
            const {id} = item;
            const {videoId, channelId, kind} = id;
            const linkId = videoId || channelId;
            const type = kind === "youtube#video"?"watch?v=": "channel/";
            const imgCss = kind === "youtube#video"? "img-video": "img-channel";
            const resultCss = kind === "youtube#video"?
              "result-video": "result-channel";
            const hrefLink = `https://youtube.com/${type}${linkId}`;
            return (
              <div key={key} className="row">
                <div className="img-container col s6">
                  <a href={hrefLink}
                    target="_blank">
                      <img src={item.snippet.thumbnails.high.url}
                        className={imgCss}/>
                  </a>
                </div>
                <div className={`result ${resultCss} col s6`}>
                  <div className="title">
                    <a href={hrefLink}
                      target="_blank">
                        {item.snippet.title}
                    </a>
                  </div>
                  <div className="description">
                    {item.snippet.description}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps({searchDetails, form}) {
  return {
    searchDetails,
    form
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({nextPageSearch: nextPageSearch}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchData);

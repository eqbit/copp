import React from 'react';
import {Link} from 'react-router-dom';
import {getSearchResults} from '../../api/api';
import {trimText} from '../../api/functions';

const minimumQueryLength = 4;

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
      results: [],
      query: ''
    }
  }
  
  openSearch = () => {
    this.setState({isOpen: true});
  };
  
  closeSearch = () => {
    this.setState({
      isOpen: false
    });
  };
  
  checkQuery = e => {
    const query = e.target.value;
    
    this.setState({query});
    
    if(query.length >= minimumQueryLength) {
      this.setState({
        results: getSearchResults(query)
      });
    } else {
      this.setState({
        results: []
      })
    }
  };
  
  handleSubmit = e => {
    if(window.clientWidth > 768) {
      e.preventDefault();
    }
  };
  
  render() {
    return (
      <div className={this.state.isOpen || this.props.mobile ? 'header-search header-search--open' : 'header-search'}
           onBlur={this.closeSearch}>
        <div className="header-search__icon" onClick={this.openSearch}>
          <img src="/images/search-icon.png" alt=""/>
        </div>
  
        <form action="/search" className={this.state.query.length >= 4 ? 'header-search__form header-search__form--got-results' : 'header-search__form'}
              onSubmit={this.handleSubmit}>
          <input type="text"
                 name="query"
                 placeholder="Поиск по сайту"
                 onChange={this.checkQuery}/>
          <div className="header-search__close" onClick={this.closeSearch}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18.6569" y="5.92896" width="2" height="18" transform="rotate(45 18.6569 5.92896)" fill="#C4C4C4"/>
              <rect x="7.34314" y="5.92896" width="18" height="2" transform="rotate(45 7.34314 5.92896)" fill="#C4C4C4"/>
            </svg>
          </div>
          <div className="header-search-results">
            {
              this.state.results.length
                ? this.state.results.map((item, index) => {
                  return (
                    <Link to={item.link}
                          className="header-search-results-item"
                          key={index}>{trimText(item.anchor, 25, '...')}</Link>
                  );
                })
                : <div className="header-search-results__no-results">Нет результатов</div>
            }
          </div>
        </form>
      </div>
    );
  }
}

export {HeaderSearch};
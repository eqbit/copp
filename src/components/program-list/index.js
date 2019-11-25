import React from 'react';
import {Link} from 'react-router-dom';
import {Scrollbars} from 'react-custom-scrollbars';

class ProgramList extends React.Component {
  constructor(props) {
    super(props);
    
    this.itemRef = [];
    
    this.state = {
      programs: this.props.programs,
      slideHeight: 455
    };
  }
  
  componentDidMount() {
    this.setState({
      slideHeight: this.itemRef[0].clientHeight + 55
    })
  }
  
  render() {
    const {programs} = this.state;
    return (
      <>
        <div className="program-list__wrapper">
          <Scrollbars style={{height: this.state.slideHeight}}
                      renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                      renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}>
            <div className="program-list">
              {programs.map((item, index) => (
                <Link to={item.link}
                      ref={item => this.itemRef[index] = item}
                      className="program-list-item"
                      key={index}>
                  <div className="program-list-item__for">{item.forWhom}</div>
                  
                  {item.tag && <div className="program-list-item__tag">{item.tag}</div>}
                  
                  <div className="program-list-item__img">
                    <img src={item.img} alt=""/>
                    
                    <div className="program-list-item__arrow">
                    
                    </div>
                  </div>
                  
                  <div className="program-list-item-info">
                    <div className="program-list-item__name">{item.name}</div>
                    
                    <div className="program-list-item-info__bottom">
                      <div className="program-list-item__data-item">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.95622 1.22628C7.1679 0.437956 6.1168 0 5.00001 0C3.88323 0 2.83213 0.437956 2.02191 1.22628C0.554758 2.69343 0.379576 5.45255 1.62775 7.13869L5.00001 12L8.35038 7.13869C9.62045 5.45255 9.42337 2.69343 7.95622 1.22628ZM5.04381 5.69343C4.18979 5.69343 3.51096 5.0146 3.51096 4.16058C3.51096 3.30657 4.18979 2.62774 5.04381 2.62774C5.89782 2.62774 6.57666 3.30657 6.57666 4.16058C6.57666 5.0146 5.87593 5.69343 5.04381 5.69343Z"
                            fill="#D0101B"/>
                        </svg>
                        
                        <span>{item.place}</span>
                      </div>
                      
                      <div className="program-list-item__data-item">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 0C2.69136 0 0 2.69136 0 6C0 9.30864 2.69136 12 6 12C9.30864 12 12 9.30864 12 6C12 2.69136 9.30864 0 6 0ZM6 10.716C3.39506 10.716 1.28395 8.59259 1.28395 6C1.28395 3.40741 3.40741 1.28395 6 1.28395C8.59259 1.28395 10.716 3.40741 10.716 6C10.716 8.59259 8.60494 10.716 6 10.716Z"
                            fill="#D0101B"/>
                          <path
                            d="M9.12347 5.81484H6.43211V2.56792C6.43211 2.29632 6.20989 2.0741 5.93829 2.0741C5.66668 2.0741 5.44446 2.29632 5.44446 2.56792V6.30866C5.44446 6.58027 5.66668 6.80249 5.93829 6.80249H9.12347C9.39507 6.80249 9.6173 6.58027 9.6173 6.30866C9.6173 6.03706 9.39507 5.81484 9.12347 5.81484Z"
                            fill="#D0101B"/>
                        </svg>
                        
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Scrollbars>
        </div>
      </>
    );
  }
}

export {ProgramList};
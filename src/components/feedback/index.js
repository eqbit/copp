import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slides: this.props.slides,
      mainSlider: null,
      navSlider: null
    };
  }
  
  componentDidMount() {
    this.setState({
      mainSlider: this.mainSlider,
      navSlider: this.navSlider
    });
  }
  
  getMainSlideLayout = (item, index) => {
    switch (item.type) {
      case 'video':
        return (
          <div className="feedback-main-slider-item" key={index}>
            <video className='feedback-main-slider-item__video' src={item.src} controls/>
            
            <div className="feedback-main-slider-item__info">
              <div className="feedback-main-slider-item__name">{item.name}</div>
              <div className="feedback-main-slider-item-program">
                Программа <Link to={item.program.link}>{item.program.name}</Link>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="feedback-main-slider-item" key={index}>
            <div className="feedback-main-slider-item__img">
              <img src={item.img} alt=""/>
            </div>
            
            <div className="feedback-main-slider-item__info">
              <div className="feedback-main-slider-item__text" dangerouslySetInnerHTML={{__html: item.text}}/>
              <div className="feedback-main-slider-item__name">{item.name}</div>
              <div className="feedback-main-slider-item-program">
                Программа <Link to={item.program.link}>{item.program.name}</Link>
              </div>
            </div>
          </div>
        );
    }
  };
  
  getNavSlideLayout = (item, index) => (
    <div className="feedback-nav-slider-item" key={index}>
      <div className="feedback-nav-slider__img">
        <img src={item.thumb} alt=""/>
        {item.type === 'video'
        && <img src="/images/play-btn.png" className="feedback-nav-slider__play" alt=""/>}
      </div>
    </div>
  );
  
  render() {
    const {mainSlider, navSlider} = this.state;
    
    const mainSliderSettings = {
        slidesToShow: 1,
        fade: true,
        asNavFor: navSlider,
        adaptiveHeight: true,
        arrows: false,
        verticalSwiping: true
      },
      navSliderSettings = {
        slidesToShow: 3,
        vertical: true,
        focusOnSelect: true,
        asNavFor: mainSlider,
        swipeToSlide: true,
        adaptiveHeight: false,
        nextArrow: '',
        prevArrow: '',
        verticalSwiping: true
      },
      {slides} = this.state;
    
    return (
      <div className="container feedback__wrapper">
        
        <div className="feedback">
          <Slider
            ref={slider => {
              this.mainSlider = slider;
            }}
            className="feedback-main-slider"
            {...mainSliderSettings}>
            {slides.map((item, index) => this.getMainSlideLayout(item, index))}
          </Slider>
          
          <Slider
            ref={slider => {
              this.navSlider = slider;
            }}
            className="feedback-nav-slider"
            {...navSliderSettings}>
            {slides.map((item, index) => this.getNavSlideLayout(item, index))}
          </Slider>
        </div>
      </div>
    );
  }
}

export {Feedback};
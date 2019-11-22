import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slides: this.props.slides,
      currentSlideIndex: 0
    };
  }
  
  handleClickNext = () => {
    const {slides, currentSlideIndex} = this.state;
    if(currentSlideIndex + 1 < slides.length) {
      this.slider.slickNext();
    }
  };
  
  handleClickPrev = () => {
    const {currentSlideIndex} = this.state;
    if(currentSlideIndex > 0) {
      this.slider.slickPrev();
    }
  };
  
  render() {
    const {slides, currentSlideIndex} = this.state;
    
    const settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (current, next) => this.setState({ currentSlideIndex: next }),
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };
    
    return (
      <div className="carousel__wrapper">
        <div className="carousel__bg">
          <img src="/images/icons-bg.png" alt=""/>
        </div>
        
        <div className="container carousel__container">
          <div className="carousel__title">
            Мы уже сейчас можем заложить фундамент будущей <br/>
            личности и помочь вам раскрыться
          </div>
          
          <div className="carousel__arrows">
            <div
              onClick={this.handleClickNext}
              className={currentSlideIndex + 2 === slides.length ? 'carousel__arrow carousel__arrow--inactive' : 'carousel__arrow'}>
              <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.005 8.38197L33.795 16.001L32.009 14.472L37.191 8.99597H-0.000976562V7.00497H37.176L31.985 1.52497L33.773 -0.00402832L40.991 7.61497L40.55 7.99197L41.005 8.38197Z" fill="#d0101b"/>
              </svg>
            </div>
  
            <div
              onClick={this.handleClickPrev}
              className={currentSlideIndex === 0 ? 'carousel__arrow carousel__arrow--inactive' : 'carousel__arrow'}>
              <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.000976562 8.38197L7.20903 16.001L8.99503 14.472L3.81302 8.99597H41.005V7.00497H3.82803L9.01902 1.52497L7.23103 -0.00402832L0.0130234 7.61497L0.454025 7.99197L-0.000976562 8.38197Z" fill="#d0101b"/>
              </svg>
            </div>
          </div>
        </div>
        
        <Slider
          ref={slider => {this.slider = slider}}
          {...settings}
          className="carousel">
          {slides.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item} alt=""/>
            </div>
          ))}
          <div className="carousel-item" key={slides.length}/>
        </Slider>
      </div>
    );
  }
  
}

export {Carousel};
import React from 'react';
import {Button} from '../button';
import {getWelcomeScreenSlides} from '../../api/api';

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slides: getWelcomeScreenSlides(),
      currentSlide: 1,
      interval: null
    };
  }
  
  componentDidMount() {
    this.setSlideshow();
  }
  
  componentWillUnmount() {
    this.clearSlideshow();
  }
  
  setSlideshow = () => {
    this.setState({
      interval: setInterval(() => {
        this.setState(prevState => ({
          currentSlide: prevState.currentSlide + 1 === prevState.slides.length
            ? 0
            : prevState.currentSlide + 1
        }));
      }, 4000)
    });
  };
  
  clearSlideshow = () => {
    clearInterval(this.state.interval);
  };
  
  handleSliderClick = currentSlide => {
    this.setState({currentSlide});
    this.clearSlideshow();
    this.setSlideshow();
  };
  
  render() {
    const {slides, currentSlide} = this.state;
    
    return (
      <div className="welcome-screen__wrapper">
        
        <div className="welcome-screen__bg">
          <img src={slides[currentSlide].img} alt=""/>
        </div>
        
        <div className="container">
          <div className="welcome-screen">
            <div className="welcome-screen__logo">
              <img src="/images/large-logo.png" alt=""/>
            </div>
          
            <div className="welcome-screen__title">
              Начни строить будущее сегодня
            </div>
          
            <Button className="btn--secondary welcome-screen__btn">
              <>
                Выбрать программу
                <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.005 8.38197L33.795 16.001L32.009 14.472L37.191 8.99597H-0.000976562V7.00497H37.176L31.985 1.52497L33.773 -0.00402832L40.991 7.61497L40.55 7.99197L41.005 8.38197Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="41" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </>
            </Button>
            
            <div className="welcome-screen-slider">
              {slides.map((item, index) => (
                <div className={currentSlide === index ? 'welcome-screen-slider__item welcome-screen-slider__item--active' : 'welcome-screen-slider__item'}
                     key={index}
                     onClick={() => {this.handleSliderClick(index)}}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {WelcomeScreen};
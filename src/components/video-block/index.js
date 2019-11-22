import React from 'react';
import {findDOMNode} from 'react-dom';
import screenfull from 'screenfull';
import ReactPlayer from 'react-player';
import OnVisible from 'react-on-visible';

class VideoBlock extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playing: false,
      url: '/video/copp-ed.mp4',
      muted: true,
      loop: true
    };
  }
  
  componentDidMount() {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        this.setState({muted: !screenfull.isFullscreen})
      });
    }
  }
  
  ref = player => {
    this.player = player;
  };
  
  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };
  
  handleVisible = playing => {
    this.setState({playing});
  };
  
  render() {
    const {playing, url, muted, loop} = this.state;
    return (
      <div className="container">
        <div className="video-block">
          <div className="video-block__text">
            <div className="video-block__title">
              Обучение в ЦОПП: <br/>
              живое, активное, яркое
            </div>
            <div className="video-block__description">
              Максимально комфортные условия для вас: <br/>
              — наши учителя — яркие личности и замечательные педагоги, их любят дети и признают коллеги; <br/>
              — показываем возможности и помогаем найти свое предназначение; <br/>
              — филиалы в 5 городах Тюменской области.
            </div>
          </div>
          
          <div className="video-block__video">
            <OnVisible onChange={this.handleVisible}>
              <ReactPlayer
                ref={this.ref}
                url={url}
                playing={playing}
                muted={muted}
                loop={loop}
                width='100%'
                height='100%'
                onClick={this.handleClickFullscreen}
              />
            </OnVisible>
          </div>
        </div>
      </div>
    );
  }
}

export {VideoBlock};
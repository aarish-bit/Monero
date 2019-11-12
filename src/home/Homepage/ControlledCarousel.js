import React, { Component } from 'react';
import {Carousel,  CarouselItem, CarouselIndicators, CarouselControl, CarouselCaption} from 'reactstrap';
import './Home.scss'

const items = [
  {

    src: './home-images/ban1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {

    src: './home-images/ban2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {

    src: './home-images/ban3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class ControlledCarousel extends Component {
  constructor(props) {
    super(props);
    this.state={activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if(this.animating) return;
    const nextIndex = this.state.activeIndex === items.length -1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }

  previous() {
   if(this.animating) return;
   const nextIndex = this.state.activeIndex === 0 ? items.length  -1 : this.state.activeIndex - 1;
   this.setState({activeIndex: nextIndex})
  }

  goToIndex(newIndex) {
    if(this.animating) return;
    this.setState({activeIndex: newIndex});
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="col-md-12 col-sm-12 col-xs-12 "/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />

        </CarouselItem>
      );
    });
    // console.log(activeIndex);

    return (
      <Carousel
        className="carousel"
        activeIndex={activeIndex }
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl className="previous" direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl className="next" direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default ControlledCarousel

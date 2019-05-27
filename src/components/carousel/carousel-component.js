import React from 'react';
import './carousel.scss';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1
        };
    }

    slideRight = () => {
        const { selectedIndex } = this.state;
        const { items } = this.props;
        if (items.length - selectedIndex > 2) {
            this.setState({
                selectedIndex: selectedIndex + 1
            });
        }
    }

    slideLeft = () => {
        const { selectedIndex } = this.state;
        if (selectedIndex > 1) {
            this.setState({
                selectedIndex: selectedIndex - 1
            });
        }
    }

    renderSlide = (obj) => {
        return (
            <>
                <img src={obj.url} alt={obj.title}></img>
                <h2>{obj.title}</h2>
                <h4>{obj.price}</h4>
            </>
        )
    }

    render() {
        const { selectedIndex } = this.state;
        const { items } = this.props;
        const prevSlide = items.length > 1 && items[selectedIndex - 1];
        const nextSlide = items.length > 1 && items[selectedIndex + 1];
        const currSlide = items.length > 1 && items[selectedIndex];
        return (
            (items.length > 1) && <div className={'carousel-container'}>

                <div className={'prev'}>
                    {this.renderSlide(prevSlide)}
                </div>
                <div className={'item'}>
                    {this.renderSlide(currSlide)}
                </div>
                <div className={'next'}>
                    {this.renderSlide(nextSlide)}
                </div>
                <div className={'left-control'} onClick={this.slideLeft}>
                    {'<'}
                </div>
                <div className={'right-control'} onClick={this.slideRight}>
                    {'>'}
                </div>
            </div>

        )
    }
}

export default Carousel;
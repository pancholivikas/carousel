import React from 'react';
import { PillsContainer } from './pills-container';
import './add-items.scss';

class AddItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <div className={'add-items-container'}>
                <input type="text" onChange={this.onTextChange} value={this.state.text} placeholder={'Enter Categories'} />
                <div className={'btn'} onClick={() => this.props.addItems(this.state.text)}>Add Category</div>
                <div className={'btn'} onClick={() => this.props.clearFilters()}>Clear Filters</div>
                <PillsContainer pills={this.props.items} />
            </div>
        )
    }
}

export default AddItems;
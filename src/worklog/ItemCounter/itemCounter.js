import React from 'react';
import './itemCounter.scss';

class ItemCounter extends React.Component {
    state = {
        currCount: 0,
        name: 'Default',
    }

    componentDidMount(){
        if(this.props.name && this.props.name !==""){
            this.setState({
                name: this.props.name,
            });
        }
    }

    handleDecrease(){
        let curVal = this.state.currCount;

        if(curVal < 1) return;

        this.setState({
            currCount: --curVal,
        });
    }

    handleIncrease(){
        let curVal = this.state.currCount;
        this.setState({
            currCount: ++curVal,
        });
    }

    handleInputChange(evt){
        const isNumbersOnly = /^\d+$/.test(evt.target.value);
        
        // text instead of number to prevent cursor.
        // Also prevent to delete all text.
        if(isNumbersOnly){
            this.setState({
                currCount: evt.target.value,
            });
        }
    }

    handleBlur(){
        const curVal = this.state.currCount;
        if(curVal === ''){
            this.setState({
                currCount: 0,
            });
        }
    }

	render(){	
        return(
            <div className="ItemCounter itWrap">
                <div className="nameWrap">
                    {this.state.name}
                </div>
                <div className="itSquare">
                    <button 
                    className="dom-btn btnUp"
                    type="button"
                    onClick={this.handleDecrease.bind(this)}
                    >-</button>
                </div>
                <div className="itSquare -withMods">
                    <input 
                    className="iText"
                    type="text"
                    onChange={this.handleInputChange.bind(this)} 
                    onBlur={this.handleBlur.bind(this)}
                    value={this.state.currCount}
                    />
                </div>
                <div className="itSquare">
                    <button
                    type="button"
                    className="dom-btn btnDown"
                    onClick={this.handleIncrease.bind(this)}
                    >+</button>
                </div>
            </div>
        )
	}
}

export default ItemCounter;
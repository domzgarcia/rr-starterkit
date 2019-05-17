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
                    <a href="javascript:void(0);" 
                    className="btnUp"
                    onClick={this.handleDecrease.bind(this)}
                    >-</a>
                </div>
                <div className="itSquare -withMods">
                    <input 
                    className="iText"
                    type="text"
                    onChange={this.handleInputChange.bind(this)} 
                    onBlur={this.handleBlur.bind(this)}
                    // defaultValue={this.state.currCount}
                    value={this.state.currCount}
                    />
                </div>
                <div className="itSquare">
                    <a href="javascript:void(0);" 
                    className="btnDown"
                    onClick={this.handleIncrease.bind(this)}
                    >+</a>
                </div>
            </div>
        )
	}
}

export default ItemCounter;
import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        return (
            <div className='header'>
                <div className='title'>JankRanker</div>
                <div className='version'>Version 1.0</div>
            </div>
        )
    }
}

export default Header
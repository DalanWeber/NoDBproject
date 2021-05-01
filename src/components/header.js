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
                <div>Kanye West says:</div>
            </div>
        )
    }
}

export default Header
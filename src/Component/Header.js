import {Component} from 'react'

class Header extends Component(){
    render(){
        return(
            <h1 className='hello' style={{color:'red'}} >{this.props.data} says Hello World</h1>
          )
    }
  }

  export default Header;

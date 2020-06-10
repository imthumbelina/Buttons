import React from "react";
export default class Modal extends React.Component {

  constructor(props){
  	super(props);
  }

  render() {
  	const mystyle = {
      position: "fixed",
      backgroundColor: "red",
      width: "50%",
      height: "50%"
    };
    return( 
    	<div style={mystyle}>
    		Hello {this.props.message}
    		<button onClick={this.props.onClose}>
    			Close
    		</button>
    	</div>
    )
  }
}
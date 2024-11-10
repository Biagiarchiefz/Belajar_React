import React from "react";

class Counter extends React.Component {


  constructor (props) {

    super(props);

    this.state = {
      count : 0,
    }

  }


  render() {
    return (
      <div className="flex justify-center items-center gap-3 mt-4 w-100">
        <h1> {this.state.count} </h1>
        <button className="border bg-slate-500 p-2" onClick={ () => this.setState( {count : this.state.count + 1 } ) }> + </button>
      </div>
    );
  }

}

export default Counter;

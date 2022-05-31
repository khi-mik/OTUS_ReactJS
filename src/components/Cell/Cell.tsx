import React, { Component, MouseEventHandler } from "react";
import './Cell.css';

interface CellProps {
  id: number
  clickHandler?: MouseEventHandler;
}

class Cell extends Component<CellProps> {
  static defaultProps = {
    id: 0
  }
  key: number = this.props.id

  // onClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   console.log(this.props.id)
  // }

  render() {
    return (
      <div className="Cell">
        <div className="Cell-div-parent"
          onClick={this.props.clickHandler}
        >
          <div className="Cell-div-child"
            id={String(this.props.id)}
          >

            [{this.props.id}]

          </div>
        </div>  
      </div>
    )
  }
}

export default Cell;
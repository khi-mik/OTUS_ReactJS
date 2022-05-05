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
        <div
          style={{
            width:  "50px",
            height: "50px",
            border: "solid 1px black"
          }}
          onClick={this.props.clickHandler}
        >
          <div 
            id={String(this.props.id)}
            style={{ 
              textAlign: "center", 
              position: "relative", 
              top: "30%" 
            }}>

            [{this.props.id}]

          </div>
        </div>  
      </div>
    )
  }
}

export default Cell;
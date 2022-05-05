import React, { Component, useState } from "react";
import './Field.css';
import Cell from "../Cell/Cell";

interface FieldProps {
  vertCellCount: number,
  horizCellCount: number
}

interface FieldState {
  id: number
}

class Field extends Component<FieldProps, FieldState> {
  static defaultProps = {
    vertCellCount: 10,
    horizCellCount: 10,
  }
  cellID: number = 0
  vertCellCnt: number = Math.max(this.props.vertCellCount, 10)
  horizCellCnt: number = Math.max(this.props.horizCellCount, 10)

  constructor(props: FieldProps) {
    super(props);

    this.state = {
      id: 0
    }
    this.cellID = this.state.id
  }

  getNewId(): number {
    this.cellID += 1;
    this.setState( { id : this.cellID } )
    return 0;
  }

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let clickedElement = e.target as HTMLDivElement
    alert(clickedElement.id)
  }
 
  renderRow(cellsInRow: number) {
    const cells = []
      for (let i = 0; i < cellsInRow; i++) {
        this.cellID += 1;
        cells.push( <div style={{ display: "inline-block" }}>  <Cell id={this.cellID} clickHandler={this.onClick} /> </div> ) 
      }
    return <div style={{ whiteSpace: "nowrap" }}> {cells} </div> 
  }

  renderField(cellsInCol: number) {
    const rows = []
    for (let i = 0; i < cellsInCol; i++) {
      rows.push( this.renderRow(this.horizCellCnt) ) 
      }
      return <div> {rows} </div> 
  }

  render() {
    return (
      <div className="Field">
        {this.renderField(this.vertCellCnt)}
      </div>  
    )
  }
}

export default Field;
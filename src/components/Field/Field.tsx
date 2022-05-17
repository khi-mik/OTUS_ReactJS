import React, { Component, } from "react";
import './Field.css';
import Cell from "../Cell/Cell";

export interface FieldProps {
  vertCellCount: number;
  horizCellCount: number;
}

export interface FieldState {
  id: number;
}

class Field extends Component<FieldProps, FieldState> {
  static defaultProps = {
    vertCellCount: 10,
    horizCellCount: 10,
  }

  constructor(props: FieldProps) {
    super(props);

    this.state = {
      id: 0
    }
  }

  getNewId(): number {
    this.setState( { id : this.state.id + 1 } )
    return this.state.id;
  }

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = e.target as HTMLDivElement
    alert(clickedElement.id)
  }
 
  renderRow(rowNum: number) {
    const cells = []
      for (let i = 0; i < this.props.horizCellCount; i++) {
        //this.getNewId();
        cells.push( <div className="Field-row">  <Cell id={this.state.id + i + rowNum * 10} clickHandler={this.onClick} /> </div> ) 
      }
    return <div> {cells} </div> 
  } 
  
  renderField() {
    const rows = []
    for (let i = 0; i < this.props.vertCellCount; i++) {
      rows.push( this.renderRow(i) ) 
      }
      return <div> {rows} </div> 
  }

  render() {
    return (
      <div className="Field">
        {this.renderField()}
      </div>  
    )
  }
}

export default Field;

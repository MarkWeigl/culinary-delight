import React, {Component} from 'react';
import ROOT_URL from '../config.js';

class DeleteRecipe extends Component {
}  

export function DeleteRecipe(_id) {
  deleteRecipe(_id) {
      this.props.dispatch(deleteRecipe(_id));

  render() {
    const onClick={this.props.handleClick(req => this.deleteRecipe(_id))}>
    return <Button className="btn btn-primary">Delete</Button>
  };
};

export default DeleteRecipe;

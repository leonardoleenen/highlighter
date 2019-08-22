import React from "react";
import { view } from "./view";
import { connect } from "react-redux";
import {
  ADD,
  AddAction,
  Highlighted,
  CleanAction,
  CLEAN
} from "../../services/types";

class Pad extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render = () =>
    view(
      (this.props as any).add,
      (this.props as any).clean,
      (this.props as any).colorSelected,
      (this.props as any).highlighted
    );
}

const mapStateToProps = (state: any) => {
  return {
    colorSelected: state.selection.pencil,
    highlighted: state.selection.highlighted
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    add: (color: string, text: string) =>
      dispatch({
        type: ADD,
        toAdd: { color, text } as Highlighted
      } as AddAction),
    clean: () => dispatch({ type: CLEAN } as CleanAction)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad);

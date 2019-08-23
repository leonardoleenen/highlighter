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


/**
 * this component contains 3 main sections: WriteSection where user can add text and make your markup, second seccion 
 * is a list of all selected phrases and last section is an action section that only got two action buttons
 */
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

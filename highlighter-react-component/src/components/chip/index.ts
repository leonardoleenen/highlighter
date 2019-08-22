import React from "react";
import { connect } from "react-redux";
import { view } from "./view";
import { backgroundPalette, RemoveAction, REMOVE } from "../../services/types";

interface ChipProps {
  id?: string;
  color?: string;
  text?: string;
}

class Chip extends React.Component<ChipProps> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const backgroundColor: string =
      backgroundPalette[
        (this.props as any).color.toLowerCase() as "red" | "yellow" | "green"
      ];
    return view(
      (this.props as any).id,
      backgroundColor,
      (this.props as any).text,
      (this.props as any).remove
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    remove: (id:string)=> dispatch({type:REMOVE,toRemove: id} as RemoveAction) 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chip);

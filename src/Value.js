
import * as React from "react";
import ImageIcon from '@material-ui/icons/Image';
export default class Value extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { data: props.raw };
  }
  render ()
  {
    const { data } = this.state;
    return (
      <div style={{ display: 'inherit' }}>
        {data !== 'undefined' ? data : <ImageIcon color="primary" />}
      </div>
    );
  }
}

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
    var splited = data.toString().split(String.fromCharCode(7));
    return (
      <div style={{ display: 'inherit' }}>
{splited.map((value) => {
  if (value.length > 30)
  {value = value.substring(0,30) + "..."}
        return <div> {value !== 'undefined' ? value : <ImageIcon color="primary" />}</div>
      })}
      </div>
    );
  }
}
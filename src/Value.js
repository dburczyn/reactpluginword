import * as React from "react";
import ImageIcon from '@material-ui/icons/Image';
export default class Value extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { data: props.raw,
    searched:props.searched2 };
  }
  render ()
  {
    const { data,searched } = this.state;
    var splited = data.toString().split(String.fromCharCode(7));
    console.log(searched)
    return (
      <span style={{width: '100%'}}>
{splited.map((value) => {
if (typeof value==='string' && searched!=='' && value.toUpperCase().includes(searched.toUpperCase()))
{
    const parts = value.split(new RegExp(`(${searched})`, 'gi'));
    return <span style={{width: '100%'}}>{parts.map(part => part.toLowerCase() === searched.toLowerCase() ? <span style={{backgroundColor: 'yellow'}}>{part}</span> : part)}</span>;
}
else if (value.length > 30)
  {value = value.substring(0,30) + "..."}
        return <span style={{width: '100%'}}> {value !== 'undefined' ? value : <ImageIcon color="primary" />}</span>
      })}
      </span>
    );
  }
}
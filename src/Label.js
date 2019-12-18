
import * as React from "react";
import Button from '@material-ui/core/Button';
import SimpleModal from "./Modal";




function handleClick (e, f, data,messageShown,messageShown2,messageShown3)
{

  e.stopPropagation();
  e.preventDefault();
  if (f[f.length - 1] !== 'model')
  {
    f.push("model");
  }
  const prepareddata = {};
  prepareddata.model = data;
  prepareddata.images = "";
  var ref = f.reduceRight((o, i) => o[i], prepareddata);
  ///// arrays ///

  var fEs="";
  var fEe="";
  var fTs="";
  var fTe="";
  if(messageShown){
    fEs="fE(";
    fEe=")";
  }
  if(messageShown2){
    fTs="fT(";
    fTe=",["+messageShown3+"])";
  }

  if (Array.isArray(ref))
  {
    if (f.length === 2)
    {
      alert("{FOR " + f[0] + " in "+fEs+fTs + f[1] + "." + f[0] +fTe+fEe+ "}\n\n{END-FOR " + f[0] + "}", "After");
    }
    else
    {
      alert("{FOR " + f[0] + " in "+fEs + fTs+"$" + f[2] + "." + f[0] +fTe+fEe+ "}\n\n{END-FOR " + f[0] + "}", "After");
    }
  }
  ///// end arrays ///
  ///// searchname ////
  else if (f[f.length - 2] !== 'objects' && f[0] === 'searchname')
  {
    alert("{IF typeof gV(model, '" + ref + "') !== 'object'}{gV(model, '" + ref + "')}{END-IF}", "After");
  }
  else if (f[f.length - 2] === 'objects' && f[0] === 'searchname')
  {
    alert("{IF typeof gV($objects, '" + ref + "') !== 'object'}{gV($objects, '" + ref + "')}{END-IF}", "After");
  }
  ///// searchname ////
  ///// root////
  else if (f.length === 2 && f[0] === 'name')
  {
    alert("{model.name}", "After");
  }
  else if (f.length === 2 && f[0] === 'class')
  {
    alert("{model.class}", "After");
  }
  else if (f.length === 2 && f[0] === 'images')
  {
    alert("{FOR image IN model.images}\n{IMAGE insertImg($image,25)}\n{END-FOR image}", "After");
  }
  ///// root////
  /// atriname///
  else if (!isNaN(f[1]) && f[0] === 'name')
  {
    alert("{$" + f[2] + ".name}", "After");
  }
  ////////////////////
  ///attrivalue///
  else if (!isNaN(f[1]) && f[0] === 'value')
  {
    alert("{IF typeof $" + f[2] + ".value !== 'object'}{$" + f[2] + ".value}{END-IF}", "After");
  }
  //////////////////
  ////objectclass////
  else if (!isNaN(f[1]) && f[0] === 'class')
  {
    alert("{$" + f[2] + ".class}", "After");
  }
  //////////////////
};
export default class Label extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handler = this.handler.bind(this);
    this.handler2 = this.handler2.bind(this);
    this.handler3 = this.handler3.bind(this);
    this.state = { itemType: props.itemType,raw: props.raw, fdata: props.fdata,messageShown:false,messageShown2:false,messageShown3:"" };
  }

  handler(stejt) {
    this.setState({
        messageShown: stejt
    });
}
handler2(stejt2) {
  this.setState({
      messageShown2: stejt2
  });
}
handler3(stejt3) {
  this.setState({
      messageShown3: stejt3
  });
}

  render ()
  {

    const { itemType,fdata, raw,messageShown,messageShown2,messageShown3 } = this.state;
    if (isNaN(raw[0])&&raw[raw.length-1]!=='objects' &&itemType==='Array')
    {
      return (
        <div>
          <Button onClick={(e) => { handleClick(e, raw, fdata,messageShown,messageShown2,messageShown3) }} color='primary' variant="contained">{raw[0]}</Button>
          <SimpleModal action={this.handler} action2={this.handler2} action3={this.handler3} />
        </div>
      );
    }
    else  if (isNaN(raw[0]) &&itemType==='Array' )
    return (
      <div>
        <Button  onClick={(e) => { handleClick(e, raw, fdata,messageShown,messageShown2,messageShown3) }} color='secondary' variant="contained">{raw[0]}</Button>
        <SimpleModal  action={this.handler} action2={this.handler2} action3={this.handler3} />
      </div>
    );
    else if (isNaN(raw[0])&&raw[raw.length-1]!=='objects' )
    {
      return (
          <Button onClick={(e) => { handleClick(e, raw, fdata,messageShown,messageShown2,messageShown3) }} color='primary' variant="contained">{raw[0]}</Button>
      );
    }
    else  if (isNaN(raw[0])  )
    return (
        <Button onClick={(e) => { handleClick(e, raw, fdata,messageShown,messageShown2,messageShown3) }} color='secondary' variant="contained">{raw[0]}</Button>
    );
    return <div></div>
  }
}

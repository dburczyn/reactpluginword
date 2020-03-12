import * as React from "react";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { getName } from './getname.js';
/////////////////////
var Word={
  run:()=>null
};
////////////////////

function insertComplex(type,refup,selectionRange)
{
  let items = [
    [],
    ["{FOR av IN mI(gV($model, '"+refup.searchname+"'))}"],
    [],
    ["{END-FOR av}"],
  ];

for (let index = 0; index < refup.value.length; index++) {
    items[0].push("{gV($"+type+",'"+refup.searchname+"')["+index+"].name}");
    items[2].push("{$av["+index+"]}");
}
 selectionRange.insertText("{IF Array.isArray(gV($"+type+",'"+refup.searchname+"'))}", "Before");
 selectionRange.insertText("{END-IF}", "After");
 selectionRange.insertTable(4, refup.value.length, "After", items);

}


function handleClick (e, f, data)
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
  var arrtorefup = f.slice();
  arrtorefup.shift();

  var refup = arrtorefup.reduceRight((o, i) => o[i], prepareddata);

  var ref = f.reduceRight((o, i) => o[i], prepareddata);


  return Word.run(async context =>
  {
    var selectionRange = context.document.getSelection();
    if (f.length === 6  && f[0]==='name' && f[2]==='ochapters')
    {
        // if (refup && refup.attributes && refup.attributes[0] &&  refup.attributes[0].searchname)
        // {
        // selectionRange.insertText("{gChN($objects, '" + refup.attributes[0].searchname + "')}", "After");
        // }
        // else{
          selectionRange.insertText(ref);
        // }
    }
    else if (f.length === 4 && f[0]==='name' && f[2]==='chapters')
    {
        // if (refup && refup.attributes && refup.attributes[0] &&  refup.attributes[0].searchname)
        // {
        // selectionRange.insertText("{gChN(model, '" + refup.attributes[0].searchname + "')}", "After");
        // }
        // else{
          selectionRange.insertText(ref);
        // }
    }

      else if (f.length === 2 && f[0] === 'name')
    {
      selectionRange.insertText("{$model.name}", "After");
    }
    else if (f.length === 4 && f[f.length - 2] === 'objects' && f[0] === 'name')
    {
      selectionRange.insertText("{$objects.name}", "After");
    }
    else if (f.length === 2 && f[0] === 'class')
    {
      selectionRange.insertText("{$model.class}", "After");
    }
    else if (f.length === 2 && f[0] === 'images')
    {
      selectionRange.insertText("{FOR image IN $model.images}\n{IMAGE insertImg($image,25)}\n{END-FOR image}", "After");
    }
    else if (f[f.length - 2] !== 'objects' &&  (f[0] === 'searchname' || f[0] === 'name'))
    {
      selectionRange.insertText("{gN($model, '" + refup.searchname + "')}", "After");
    }
    else if (f[f.length - 2] === 'objects' && (f[0] === 'searchname' || f[0] === 'name' ))
    {
      selectionRange.insertText("{gN($objects, '" + refup.searchname + "')}", "After");
    }
    else if (f[f.length - 2] !== 'objects' &&  (f[0] === 'searchname' ||  f[0] === 'value'))
    {
      if (typeof refup.value !=='object' )
      {
      selectionRange.insertText("{gV($model, '" + refup.searchname + "')}", "After");
      }
      else if (typeof refup.value ==='object' )
      {
        insertComplex('model',refup,selectionRange);
      }
    }
    else if (f[f.length - 2] === 'objects' && (f[0] === 'searchname' || f[0] === 'value'))
    {
      if (typeof refup.value !=='object' )
      {
      selectionRange.insertText("{gV($objects, '" + refup.searchname + "')}", "After");
      }
      else if (typeof refup.value ==='object' )
      {
        insertComplex('objects',refup,selectionRange);
      }
    }
    else if (!isNaN(f[1]) && f[0] === 'class')
    {
      selectionRange.insertText("{$" + f[2] + ".class}", "After");
    }
    else if (f[0] === 'objects')
    {
      selectionRange.insertText("{FOR objects in $model.objects}\n\n{END-FOR objects}", "After");
    }

    await context.sync();
  });
}
export default class Label extends React.Component
{
  constructor(props, context)
  {
    super(props, context);
    this.state = { itemType: props.itemType, raw: props.raw, fdata: props.fdata};
  }

  render ()
  {
    const { itemType, fdata, raw} = this.state;
    if (raw && isNaN(raw[0]) && raw[0]==='searchname')
    {return (
    null
      ); }
    else if (raw&&isNaN(raw[0]) && raw[raw.length - 1] !== 'objects' && itemType === 'Array')
    {
      return (
        <span>
          <Button onClick={(e) => { handleClick(e, raw, fdata) }} color='primary' variant="contained">{getName(raw[0])}</Button>
          {/* {getName(raw[0])} */}
        </span>
      );
    }
    // else if (raw&&isNaN(raw[0]) && raw[0] === 'objects' && itemType === 'Array')
    else if (raw&&isNaN(raw[0]) && raw[0] === 'objects')
    {
      return (
        <span>
          <Button onClick={(e) => { handleClick(e, raw, fdata) }} color='secondary' variant="contained">{getName(raw[0])}</Button>
          {/* {getName(raw[0])} */}
        </span>
      );
    }
    else if (raw && isNaN(raw[0]) && itemType === 'Array')
      return (
        <span>
          <Button onClick={(e) => { handleClick(e, raw, fdata) }} color='secondary' variant="contained">{getName(raw[0])}</Button>
          {/* {getName(raw[0])} */}
        </span>
      );
    else if (raw && isNaN(raw[0]) && raw[raw.length - 1] !== 'objects' && raw[0]!=='type')
    {
      return (
        <span>
        <Button onClick={(e) => { handleClick(e, raw, fdata) }} color='primary' variant="contained">{getName(raw[0])}</Button>
        <IconButton ></IconButton>
        </span>
        );
    }
    // else if (raw && isNaN(raw[0]) && raw[0]!=='type')
    else if (raw && isNaN(raw[0]) )
      return (
        <span>
        <Button onClick={(e) => { handleClick(e, raw, fdata) }} color='secondary' variant="contained">{getName(raw[0])}</Button>
        <IconButton ></IconButton>
        </span>
        );

    return <span></span>
  }
}

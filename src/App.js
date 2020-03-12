import * as React from "react";
import Label from "./Label";
import Value from "./Value";
import './App.css';
import { prepareData } from './prepareData.js';
import JSONTree from 'react-json-tree';
import Button from '@material-ui/core/Button';
import { getName } from './getname.js';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var flatten = require('flat');
/////////////////////
var Word={
  run:()=>null
};
////////////////////
export default class App extends React.Component
{
  constructor(props, context)
  {
    super(props, context);
    this.state = {
      fdata: {},
      splitedelenments:[],
      key:0,
      searched2:'',
      visibility:true,
    };
  }
  render ()
  {
    const { fdata,splitedelenments,searched2 } = this.state;
      const nodechecker = (a) =>
      {
        var renderuj=false;
          splitedelenments.forEach(element => {
            if( a.toString()!=='' && element.slice().reverse().toString().toUpperCase().includes(a.toString().toUpperCase())&& !element.slice().reverse().toString().toUpperCase().includes(('o'+a.toString()).toUpperCase()))
                      {
            renderuj=true;
          }
         });
         return renderuj;
      }
      const preparekeysforsearch = (key) =>
      {
var qq =flatten(fdata);
var splitedelenmentsinner=[]
 Object.keys(qq).forEach(element => {
  if (key!=='' && typeof qq[element] === 'string' && !element.includes('searchname') && qq[element].toUpperCase().includes(key.toUpperCase()))
  {
  splitedelenmentsinner.push(element.split('.'));
  }
 });
return splitedelenmentsinner;
      }
    const handleSubmit = (e) =>
    {
      e.stopPropagation();
      e.preventDefault();
      this.setState({ key: Math.random() });
      this.setState({ visibility: false });
      // fetch('https://10.0.7.141:8443/static/' + e.target.username.value + '.js')
      fetch('https://testfileserv.herokuapp.com/test_old_akawycieczka.js')
      .then(function (response)
        {
          if (response.status >= 400)
          {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(data =>
        {
          this.setState({ fdata: prepareData(data) });
        });
    };
    const handleSubmit2 = (e) =>
    {
      e.stopPropagation();
      e.preventDefault();
      this.setState({ key: Math.random() });
      var searched = e.target.username2.value;
   this.setState({ splitedelenments: preparekeysforsearch(searched)});
   this.setState({ searched2: searched});
    };
    const handleClick = (e) =>
    {
      e.stopPropagation();
      e.preventDefault();
  return Word.run(async context =>
  {
    var selectionRange = context.document.getSelection();
    selectionRange.insertText("{FOR model in models}\n\n{END-FOR model}");
    await context.sync();
  });
    };
  //   const handleClick2 = (e) =>
  //   {
  //     e.stopPropagation();
  //     e.preventDefault();
  // return Word.run(async context =>
  // {
  //   var selectionRange = context.document.getSelection();
  //   var items = [
  //     ["{gCN($attri.value[0])}","{gCN($attri.value[1])}","{gCN($attri.value[2])}","{gCN($attri.value[3])}","{gCN($attri.value[4])}"],
  //     ["{FOR av IN mI($attri.value)}","","","",""],
  //     ["{$av[0]}","{$av[1]}","{$av[2]}","{$av[3]}","{$av[4]}"],
  //     ["{END-FOR av}","","","",""],
  //   ];
  //   selectionRange.insertTable(4, 5, "After", items);
  //   await context.sync();
  // });
  //   };
    const theme = {
      scheme: 'monokai',
      author: 'wimer hazenberg (http://www.monokai.nl)',
      base00: '#FFFFFF',
      base01: '#000000',
      base02: '#000000',
      base03: '#000000',
      base04: '#000000',
      base05: '#000000',
      base06: '#000000',
      base07: '#000000',
      base08: '#000000',
      base09: '#000000',
      base0A: '#000000',
      base0B: '#000000',
      base0C: '#000000',
      base0D: '#000000',
      base0E: '#000000',
      base0F: '#000000'
    };
    return (
      <div>
        { this.state.visibility?
        <span style={{visibility: this.state.visibility}}>
        <h1 style={{verticalAlign: "middle"}} className="ms-bgColor-neutralLighter ms-u-fadeIn500"><img src="./adonis.png" alt="adonis logo"></img>ADONIS Word Report Creator</h1>
         <p>
         Insert model ID for template preparation
          </p>
        <form
          onSubmit={(e) => { handleSubmit(e) }}
        >
          <input
            id="username"
            name="username"
            type="text"
          />
          <button>Load model</button>
        </form>
        </span> :
        <span>
          <p>
          Place coursor in Word template in the left frame and click buttons in the right frame to insert ADONIS elements in the template. Blue buttons represent model attributes, red buttons represent objects in the model.
          </p>
          <form
          onSubmit={(e) => { handleSubmit2(e) }}
        >
          <input
            id="username2"
            name="username2"
            type="text"
          />
          <button>Search</button>
        </form>
          <Button onClick={(e) => { handleClick(e) }} color='primary' variant="contained">{getName('start')}</Button>
          {/* <Button onClick={(e) => { handleClick2(e) }} color='primary' variant="contained">testtable</Button> */}
          </span>
  }
         <span style={{width: '100%'}}>
          <JSONTree
          key={this.state.key}
          data={fdata}
            hideRoot={true}
            theme={theme}
            invertTheme={false}
            shouldExpandNode={(a,b,c) => {
              let dorender = nodechecker(a)
return dorender;
            }}
              valueRenderer={(raw,visible,kij) => {
           return <Value raw={raw} visible={visible} kij={kij} searched2={searched2} />
               }}
             labelRenderer={(raw, itemType) => <Label raw={raw} fdata={fdata} itemType={itemType} />}
             getItemString={(type, data, itemType, itemString) => <span>{data.class || data.name}</span>}
          />
          </span>
      </div>
    );
  }
}

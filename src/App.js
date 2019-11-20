import React from 'react';
import logo from './logo.svg';
import './App.css';
import JSONTree from 'react-json-tree';
var sampledata = require('./sampleadonis');
// const handleClick = (e,f) => {
//   f.stopPropagation();  //  <------ Here is the magic
// alert(e)
// }

function getFlatObject(object) {
  function iter(o, p) {
      if (Array.isArray(o) ){
          o.forEach(function (a, i) {
              iter(a, p.concat(i));
          });
          return;
      }
      if (o !== null && typeof o === 'object') {
          Object.keys(o).forEach(function (k) {
              iter(o[k], p.concat(k));
          });
          return;
      }
      path[p.join('.')] = o;
  }

  var path = {};
  iter(object, []);
  return path;
}








function getComplexVals(passedval,passedinp) {
  var vals=[]
  if (typeof passedinp.complexvalues.member !== 'undefined' && typeof passedinp.complexvalues.member[0] === 'undefined')
  {
    for (let [index2, val2] of passedinp.complexvalues.member.complexvalues.member.entries()) {
      if (val2._name === passedval._name)
      {
        vals.push(getValue(val2))
      }
          }
  }
  if (  typeof passedinp.complexvalues.member[0] !== 'undefined')
{
  for (let [index, val] of passedinp.complexvalues.member.entries()) {
    for (let [index2, val2] of val.complexvalues.member.entries()) {
if (val2._name === passedval._name)
{
  vals.push(getValue(val2))
}
    }
  }
}
return vals;
}
function getComplex(inp) {
  var complexarray=[]
  for (let [index, val] of inp.columns.member.entries()) {
var complexmember ={}
complexmember.name = val._name;
complexmember.values = getComplexVals(val,inp)
complexarray.push(complexmember)
  }
return complexarray;
}
function getValue(inp) {
  if (typeof inp.attrval !== 'undefined') {
    if (inp.attrval.attrvaltype._type === 'ENUM') {
      return (inp.attrval._name);
    } else if (inp.attrval.attrvaltype._type === 'BOOL') {
      return (inp.attrval.value === '0' ? "nie" : "tak");
    } else if (inp.attrval.attrvaltype._type === 'LONGSTRING' || inp.attrval.attrvaltype._type === 'UNSIGNED INTEGER' || inp.attrval.attrvaltype._type === 'FILE_POINTER') {
      return (inp.attrval.value);
    } else if (inp.attrval.attrvaltype._type === 'ADOSTRING' || inp.attrval.attrvaltype._type === 'STRING') {
      return (typeof inp.attrval.value.p === 'undefined' ? inp.attrval.value : inp.attrval.value.p);
    } else if (inp.attrval.attrvaltype._type === 'DOUBLE' || inp.attrval.attrvaltype._type === 'UTC') {
      return (inp.attrval["alternate-value"]);
    }  else if (inp.attrval.attrvaltype._type === 'INTERREF') {
      return (inp.attrval.relation.link.endpoint._name);
    }
    else {
      return inp.attrval.attrvaltype._type;
    }
  } else if (typeof inp.link !== 'undefined' && typeof inp.link.endpoint !== 'undefined') {
    return (inp.link.endpoint._name);
  } else if (inp._complex ==='1') {
     return getComplex(inp);
  }
  else {
    return "wrongtype";
  }
}
function prepareData(sampledata) {
  var preparedData = {};
  preparedData.name=sampledata.model._name;
  preparedData.class=sampledata.model._class;
  preparedData.chapters = [];
  for (let [index, val] of sampledata.model.notebook.chapter.entries()) {
var chapter = {}
chapter.name = val._name
chapter.attributes =[]
var attributes = [].concat(val.attribute||[]).concat(val.relation||[])
for (let [aindex, aval] of attributes.entries()) {
  var attri = {};
  if (typeof aval._name !== 'undefined') {
    attri.name=aval._name;
    attri.value=getValue(aval)
    attri.searchname=aval._idname;
   chapter.attributes.push(attri);
  } else if (typeof aval._class !== 'undefined') {
    attri.name=aval._class;
    attri.searchname=aval._idclass;
    attri.value=getValue(aval)
    chapter.attributes.push(attri);
  } else {
    attri.name="noname";
    attri.value="noval";
    chapter.attributes.push(attri);
  }
}
preparedData.chapters[index]=chapter
}
  return preparedData;
};




const prepareddata = prepareData(sampledata);

var path = getFlatObject(prepareddata);

console.log(path);

function App() {
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <JSONTree data={prepareddata} />
      </header>
    </div>
  );
}
export default App;

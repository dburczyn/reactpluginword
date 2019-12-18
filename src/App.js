import * as React from "react";
import Header from "./Header";
import Label from "./Label";
import Value from "./Value";
import HeroList, { HeroListItem } from "./HeroList";
import './App.css';
import JSONTree from 'react-json-tree';
var groupBy = require('lodash.groupby');
var mergeWith = require('lodash.mergewith');
var isArray = require('lodash.isarray');
function getAttrs (val)
{
  const result = [];
  function getAttrsInn (obj)
  {
    for (const prop in obj)
    {
      const value = obj[prop];
      if (typeof value === 'object')
      {
        getAttrsInn(value);
      }
      else if (prop === '_controltype')
      {
        result.push(obj);
      }
    }
  }
  getAttrsInn(val);
  return result;
}
function prepareData (sampledata)
{
  var preparedData = {};
  if (sampledata['ado:publishing'].hasOwnProperty('model'))
  {
    preparedData.name = sampledata['ado:publishing'].model._name;
    preparedData.class = sampledata['ado:publishing'].model._class;
    preparedData.type = sampledata['ado:publishing'].model._idclass;
    preparedData.images = sampledata.images;
    preparedData.chapters = [];
    for (let [index, val] of sampledata['ado:publishing'].model.notebook.chapter.entries())
    {
      var chapter = {};
      chapter.name = val._name;
      chapter.attributes = [];
      var attributes = getAttrs(val);
      for (let [i, aval] of attributes.entries())
      {
        var attri = {};
        if (aval.hasOwnProperty('_name'))
        {
          attri.name = aval._name;
          attri.value = getValue(aval);
          attri.searchname = aval._idname;
          if (attri.searchname !== 'INSTANCE_CHANGE_HISTORY')
          {
            chapter.attributes.push(attri);
          }
        } else if (aval.hasOwnProperty('_class'))
        {
          attri.name = aval._class;
          attri.searchname = aval._idclass;
          attri.value = getValue(aval);
          chapter.attributes.push(attri);
        } else
        {
          attri.name = "noname";
          attri.value = "noval";
          chapter.attributes.push(attri);
        }
      }
      preparedData.chapters[index] = chapter;
    }
    preparedData.objects = [];
    for (let [oindex, oval] of sampledata['ado:publishing'].model.object.entries())
    {
      var object = {};
      object.name = oval._name;
      object.class = oval._class;
      object.type = oval._idclass;
      object.ochapters = [];
      for (let [index, val] of oval.notebook.chapter.entries())
      {
        var ochapter = {};
        ochapter.name = val._name;
        ochapter.attributes = [];
        var oattributes = getAttrs(val);
        for (let [i, aval] of oattributes.entries())
        {
          var oattri = {};
          if (aval.hasOwnProperty('_name'))
          {
            oattri.name = aval._name;
            oattri.value = getValue(aval);
            oattri.searchname = aval._idname;
            if (oattri.searchname !== 'INSTANCE_CHANGE_HISTORY')
            {
              ochapter.attributes.push(oattri);
            }
          } else if (aval.hasOwnProperty('_class'))
          {
            oattri.name = aval._class;
            oattri.searchname = aval._idclass;
            oattri.value = getValue(aval);
            ochapter.attributes.push(oattri);
          } else
          {
            oattri.name = "noname";
            oattri.value = "noval";
            ochapter.attributes.push(oattri);
          }
        }
        object.ochapters[index] = ochapter;
      }
      preparedData.objects[oindex] = object;
    }
    preparedData.objects.sort(function (a, b)
    {
      return ('' + a.name).localeCompare(('' + b.name));
    });
  } else if (sampledata['ado:publishing'].hasOwnProperty('object'))
  {
    preparedData.name = sampledata['ado:publishing'].object._name;
    preparedData.class = sampledata['ado:publishing'].object._class;
    preparedData.type = sampledata['ado:publishing'].object._idclass;
    preparedData.images = "";
    preparedData.chapters = [];
    for (let [index, val] of sampledata['ado:publishing'].object.notebook.chapter.entries())
    {
      var sochapter = {};
      sochapter.name = val._name;
      sochapter.attributes = [];
      var soattributes = getAttrs(val);
      for (let [i, aval] of soattributes.entries())
      {
        var soattri = {};
        if (aval.hasOwnProperty('_name'))
        {
          soattri.name = aval._name;
          soattri.value = getValue(aval);
          soattri.searchname = aval._idname;
          sochapter.attributes.push(soattri);
        } else if (aval.hasOwnProperty('_class'))
        {
          soattri.name = aval._class;
          soattri.searchname = aval._idclass;
          soattri.value = getValue(aval);
          sochapter.attributes.push(soattri);
        } else
        {
          soattri.name = "noname";
          soattri.value = "noval";
          sochapter.attributes.push(soattri);
        }
      }
      preparedData.chapters[index] = sochapter;
    }
    preparedData.objects = [];
  }
  var groupedobjects = groupBy(preparedData.objects, 'class');
  var out = [];
  Object.keys(groupedobjects).forEach(function (item)
  {
    function customizer (objValue, srcValue)
    {
      if (isArray(srcValue))
      {
        return mergeWith(srcValue, objValue, customizer);
      }
      else if (typeof objValue === 'string')
      {
        if (!objValue.includes(srcValue))
        {
          return objValue.concat('\n' + srcValue);
        }
        else
        {
          return objValue;
        }
      }
    }
    var merged = groupedobjects[item][0];
    mergeWith(merged, ...groupedobjects[item], customizer);

    out.push(merged);
  });
  preparedData.objects=out;
  return preparedData;
}
function getComplexVals (passedval, passedinp)
{
  var vals = [];
  if (passedinp.hasOwnProperty('complexvalues') && passedinp.complexvalues.hasOwnProperty('member'))
  {
    if (!Array.isArray(passedinp.complexvalues.member))
    {
      for (let [i, val2] of passedinp.complexvalues.member.complexvalues.member.entries())
      {
        if (val2._name === passedval._name)
        {
          vals.push(getValue(val2));
        }
      }
    }
    else if (Array.isArray(passedinp.complexvalues.member))
    {
      for (let [i, val] of passedinp.complexvalues.member.entries())
      {
        for (let [i, val2] of val.complexvalues.member.entries())
        {
          if (val2._name === passedval._name)
          {
            vals.push(getValue(val2));
          }
        }
      }
    }
  }
  return vals;
}
function getComplex (inp)
{
  if (inp.hasOwnProperty('columns'))
  {
    var complexarray = [];
    for (let [i, val] of inp.columns.member.entries())
    {
      var complexmember = {};
      complexmember.name = val._name;
      complexmember.values = getComplexVals(val, inp);
      complexarray.push(complexmember);
    }
    return complexarray;
  }
}
function getValue (inp)
{
  if (inp.hasOwnProperty('attrval'))
  {
    if (inp.attrval.attrvaltype._type === 'ENUM')
    {
      return (inp.attrval._name);
    } else if (inp.attrval.attrvaltype._type === 'BOOL')
    {
      return (inp.attrval.value === 0 ? "nie" : "tak");
    } else if (inp.attrval.attrvaltype._type === 'LONGSTRING' || inp.attrval.attrvaltype._type === 'UNSIGNED INTEGER' || inp.attrval.attrvaltype._type === 'FILE_POINTER' || inp.attrval.attrvaltype._type === 'SHORTSTRING' || inp.attrval.attrvaltype._type === 'INTEGER' || inp.attrval.attrvaltype._type === 'ADOSTRING' || inp.attrval.attrvaltype._type === 'STRING')
    {
      return (inp.attrval.value.hasOwnProperty('p') ? inp.attrval.value.p : inp.attrval.value);
    }
    else if (inp.attrval.attrvaltype._type === 'DOUBLE' || inp.attrval.attrvaltype._type === 'UTC')
    {
      return (inp.attrval["alternate-value"] || inp.attrval.value);
    } else if (inp.attrval.attrvaltype._type === 'INTERREF')
    {
      if (inp.attrval.relation.hasOwnProperty('link'))
      {
        return (inp.attrval.relation.link.endpoint._name);
      }
    } else
    {
      return inp.attrval.attrvaltype._type;
    }
  }
  else if (inp._type === 'FILE_POINTER')
  {
    var splited = inp.value.param.split('/');
    return splited[splited.length - 1];
  }
  else if (inp.hasOwnProperty('link') && inp.link.hasOwnProperty('endpoint'))
  {
    return (inp.link.endpoint._name);
  } else if (inp.hasOwnProperty('link') && Array.isArray(inp.link))
  {
    var ret = '';
    for (let [i, val] of inp.link.entries())
    {
      ret = ret + '\u2022' + val.endpoint._name + '\n';
    }
    return ret.replace(/^\s+|\s+$/g, "");
  } else if (inp._complex === 1)
  {
    return getComplex(inp);
  } else
  {
    return "";
  }
}
export default class App extends React.Component
{
  constructor(props, context)
  {
    super(props, context);
    this.state = {
      listItems: [],
      fdata: {}
    };
  }
  componentDidMount ()
  {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration"
        },
        {
          icon: "Unlock",
          primaryText: "Unlock features and functionality"
        },
        {
          icon: "Design",
          primaryText: "Create and visualize like a pro"
        }
      ]
    });
  }
  render ()
  {
    const { title, isOfficeInitialized } = this.props;
    const { fdata } = this.state;
    const handleSubmit = (e) =>
    {
      e.stopPropagation();
      e.preventDefault();
      fetch('http://localhost:8080/static/' + e.target.username.value + '.js')
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
      <div className="ms-welcome">
        <form
          onSubmit={(e) => { handleSubmit(e) }}
        >
          <input
            id="username"
            name="username"
            type="text"
          />
          <button>Send data!</button>
        </form>
        <Header logo="assets/logo-filled.png" title={this.props.title} message="Welcome" />
        <HeroList message="Discovery what Office Add-ins can do for you today!" items={this.state.listItems}>
          <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
          </p>
          <JSONTree data={fdata}
            hideRoot={true}
            theme={theme}
            invertTheme={false}
            labelRenderer={(raw, itemType) => <Label raw={raw} fdata={fdata} itemType={itemType} />}
            valueRenderer={raw => <Value raw={raw} />}
            getItemString={(type, data, itemType, itemString) => <span>{data.class || data.name}</span>}
          />
        </HeroList>
      </div>
    );
  }
}

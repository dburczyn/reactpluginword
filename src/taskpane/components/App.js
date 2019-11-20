import * as React from "react";
import { Button, ButtonType } from "office-ui-fabric-react";
import Header from "./Header";
import HeroList, { HeroListItem } from "./HeroList";
import Progress from "./Progress";
var sampledata = require('./sampleadonis');

/* global Button Header, HeroList, HeroListItem, Progress, Word */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
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

  click = async (key) => {
    return Word.run(async context => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      if (key.charAt(0) ==='[')
      {
key = '+++FOR item IN '+key+'+++'+ "\n+++INS " + 'item' + "+++"  + "\n+++END-FOR item+++"

      }
      else{
        key = "+++INS " + key + "+++" ;
      }
var selectionRange = context.document.getSelection();
        var text = selectionRange.insertText(key, "After");

      // const paragraph = context.document.body.insertParagraph(key, 'Before');

      // change the paragraph color to blue.
      // paragraph.font.color = "blue";

      await context.sync();
    });
  };

  render() {
    var keys = [];
    for(var k in sampledata.model){
      if (typeof sampledata.model[k][0] === 'object')
      {keys.push("["+k+"]");}
      else{
        {keys.push(k)}
      }

    }
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo="assets/logo-filled.png" title={this.props.title} message="Welcome" />
        <HeroList message="Discover what Office Add-ins can do for you today!" items={this.state.listItems}>
          <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
          </p>
          {keys.map(key =>  <Button
            className="ms-welcome__action"
            buttonType={ButtonType.hero}
            iconProps={{ iconName: "ChevronRight" }}
            onClick={function() {
               this.click(key);
            }.bind(this)}
          >
            {key}
          </Button>
          )}

        </HeroList>
      </div>
    );
  }
}

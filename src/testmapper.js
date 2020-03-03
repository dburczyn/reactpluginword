var groupBy = require('lodash.groupby');
var util = require('util');
var mergeWith = require('lodash.mergewith');
var isArray = require('lodash.isarray');
var data = {
    "name": "Evaluate road trip (Region A)eee",
    "class": "Business Process Diagram",
    "chapters.0.name": "General information",
    "chapters.0.attributes.0.name": "Name",
    "chapters.0.attributes.0.value": "Evaluate road trip (Region A)eee",
    "chapters.0.attributes.0.searchname": "NAME",
    "chapters.0.attributes.1.name": "Description",
    "chapters.0.attributes.1.value": "The process aims at controlling adherence to the budget and at assessing satisfaction with the trip organisation and the trip itself.\nThis variant is valid for all offices in Region A.",
    "chapters.0.attributes.1.searchname": "A_DESCRIPTION",
    "chapters.0.attributes.2.name": "Aim",
    "chapters.0.attributes.2.value": "* Control of the budget plan\n* Inquiry on satisfaction",
    "chapters.0.attributes.2.searchname": "AIM",
    "chapters.0.attributes.3.name": "Trigger",
    "chapters.0.attributes.3.value": "All invoices have arrived (after returning from the trip)",
    "chapters.0.attributes.3.searchname": "TRIGGER",
    "chapters.0.attributes.4.name": "Result",
    "chapters.0.attributes.4.value": "* All dubious batches have been resolved/settled\n* All travelers have been informed about the budget situation\n* All travelers have had the chance to provide feedback\n* From the received feedback recommendations could be derived for future trips and travel planning",
    "chapters.0.attributes.4.searchname": "RESULT",
    "chapters.1.name": "Organisation",
    "chapters.1.attributes.0.name": "Process owner",
    "chapters.1.attributes.0.searchname": "RC_OWNER",
    "chapters.1.attributes.0.value": "guest",
    "chapters.2.name": "Classification",
    "chapters.2.attributes.0.name": "Process type",
    "chapters.2.attributes.0.value": "Management process",
    "chapters.2.attributes.0.searchname": "PROCESS_TYPE_ACCORDING_TO_ISO_9000",
    "chapters.2.attributes.1.name": "Predictability",
    "chapters.2.attributes.1.value": "With ad-hoc exceptions",
    "chapters.2.attributes.1.searchname": "A_PREDICTABILITY",
    "chapters.2.attributes.2.name": "Complexity",
    "chapters.2.attributes.2.value": "Average",
    "chapters.2.attributes.2.searchname": "A_COMPLEXITY",
    "chapters.2.attributes.3.name": "Process frequency",
    "chapters.2.attributes.3.value": "Few times per year",
    "chapters.2.attributes.3.searchname": "A_PROCESS_FREQUENCY",
    "chapters.2.attributes.4.name": "Business value",
    "chapters.2.attributes.4.value": "Important",
    "chapters.2.attributes.4.searchname": "A_BUSINSS_VALUE",
    "chapters.2.attributes.5.name": "Key process",
    "chapters.2.attributes.5.value": "No",
    "chapters.2.attributes.5.searchname": "KEY_PROCESS",
    "chapters.3.name": "Potential and maturity analysis",
    "chapters.3.attributes": [],
    "chapters.4.name": "Input/Output",
    "chapters.4.attributes": [],
    "chapters.5.name": "Documents",
    "chapters.5.attributes.0.name": "Terms, abbreviations",
    "chapters.5.attributes.0.value.0.name": "Term",
    "chapters.5.attributes.0.value.0.values.0": "",
    "chapters.5.attributes.0.value.0.values.1": "",
    "chapters.5.attributes.0.value.0.values.2": "",
    "chapters.5.attributes.0.value.0.values.3": "",
    "chapters.5.attributes.0.value.0.values.4": "",
    "chapters.5.attributes.0.value.0.values.5": "",
    "chapters.5.attributes.0.value.0.values.6": "",
    "chapters.5.attributes.0.value.0.values.7": "",
    "chapters.5.attributes.0.value.1.name": "Description",
    "chapters.5.attributes.0.value.1.values.0": "",
    "chapters.5.attributes.0.value.1.values.1": "",
    "chapters.5.attributes.0.value.1.values.2": "",
    "chapters.5.attributes.0.value.1.values.3": "",
    "chapters.5.attributes.0.value.1.values.4": "",
    "chapters.5.attributes.0.value.1.values.5": "",
    "chapters.5.attributes.0.value.1.values.6": "",
    "chapters.5.attributes.0.value.1.values.7": "",
    "chapters.5.attributes.0.searchname": "TERMS_ABBREVIATIONS",
    "chapters.6.name": "Customers/Providers",
    "chapters.6.attributes": [],
    "chapters.7.name": "Continuous improvement",
    "chapters.7.attributes": [],
    "chapters.8.name": "Risk management",
    "chapters.8.attributes": [],
    "chapters.9.name": "Compliance",
    "chapters.9.attributes": [],
    "chapters.10.name": "Systems/Products",
    "chapters.10.attributes": [],
    "chapters.11.name": "Properties",
    "chapters.11.attributes": [],
    "chapters.12.name": "Lifecycle",
    "chapters.12.attributes.0.name": "State",
    "chapters.12.attributes.0.value": "Draft",
    "chapters.12.attributes.0.searchname": "MFB_RWF_STATE",
    "chapters.12.attributes.1.name": "Valid from",
    "chapters.12.attributes.1.value": "02.08.2015",
    "chapters.12.attributes.1.searchname": "A_MFB_RWF_VALID_FROM_DATE",
    "chapters.12.attributes.2.name": "Valid until",
    "chapters.12.attributes.2.value": "02.08.2019",
    "chapters.12.attributes.2.searchname": "A_MFB_RWF_VALID_UNTIL_DATE",
    "chapters.12.attributes.3.name": "Resubmission date",
    "chapters.12.attributes.3.value": "02.07.2019",
    "chapters.12.attributes.3.searchname": "A_MFB_RWF_RESUBMISSION_DATE",
    "chapters.13.name": "Attachments",
    "chapters.13.attributes": [],
    "chapters.14.name": "Process execution",
    "chapters.14.attributes": [],
    "chapters.15.name": "System information",
    "chapters.15.attributes.0.name": "Author",
    "chapters.15.attributes.0.value": "guest",
    "chapters.15.attributes.0.searchname": "AUTHOR",
    "chapters.15.attributes.1.name": "Creation date",
    "chapters.15.attributes.1.value": "08.01.2020 11:45",
    "chapters.15.attributes.1.searchname": "CREATION_DATE",
    "chapters.15.attributes.2.name": "Last editor",
    "chapters.15.attributes.2.value": "guest",
    "chapters.15.attributes.2.searchname": "LAST_EDITOR",
    "chapters.15.attributes.3.name": "Date of last change",
    "chapters.15.attributes.3.value": "08.01.2020 12:04",
    "chapters.15.attributes.3.searchname": "DATE_OF_LAST_CHANGE",
    "chapters.15.attributes.4.name": "Number of objects and relations",
    "chapters.15.attributes.4.value": 68,
    "chapters.15.attributes.4.searchname": "NUMBER_OF_OBJECTS_AND_RELATIONS",
    "objects.0.name": "All invoices arrived",
    "objects.0.class": "Start Event",
    "objects.0.ochapters.0.name": "General information",
    "objects.0.ochapters.0.attributes.0.name": "Name",
    "objects.0.ochapters.0.attributes.0.value": "All invoices arrived",
    "objects.0.ochapters.0.attributes.0.searchname": "NAME",
    "objects.0.ochapters.0.attributes.1.name": "Order",
    "objects.0.ochapters.0.attributes.1.value": 1,
    "objects.0.ochapters.0.attributes.1.searchname": "A_ORDER",
    "objects.0.ochapters.1.name": "Event type",
    "objects.0.ochapters.1.attributes.0.name": "Type",
    "objects.0.ochapters.1.attributes.0.value": "Top level",
    "objects.0.ochapters.1.attributes.0.searchname": "EVENT_TYPE",
    "objects.0.ochapters.1.attributes.1.name": "Condition",
    "objects.0.ochapters.1.attributes.1.value": "tak",
    "objects.0.ochapters.1.attributes.1.searchname": "TRIGGER_CONDITION",
    "objects.0.ochapters.2.name": "Output",
    "objects.0.ochapters.2.attributes": [],
    "objects.0.ochapters.3.name": "Continuous improvement",
    "objects.0.ochapters.3.attributes": [],
    "objects.0.ochapters.4.name": "Object properties",
    "objects.0.ochapters.4.attributes": [],
    "objects.0.ochapters.5.name": "Details",
    "objects.0.ochapters.5.attributes": [],
    "objects.0.ochapters.6.name": "Changes",
    "objects.0.ochapters.6.attributes": [],
    "objects.0.ochapters.7.name": "Attachments",
    "objects.0.ochapters.7.attributes": [],
    "objects.0.ochapters.8.name": "Simulation data",
    "objects.0.ochapters.8.attributes.0.name": "Quantity",
    "objects.0.ochapters.8.attributes.0.value": 90,
    "objects.0.ochapters.8.attributes.0.searchname": "A_QUANTITY",
    "objects.0.ochapters.8.attributes.1.name": "Time period",
    "objects.0.ochapters.8.attributes.1.value": "Per month",
    "objects.0.ochapters.8.attributes.1.searchname": "TIME_PERIOD",
    "objects.0.ochapters.9.name": "Representation",
    "objects.0.ochapters.9.attributes.0.name": "Display name",
    "objects.0.ochapters.9.attributes.0.value": "tak",
    "objects.0.ochapters.9.attributes.0.searchname": "DISPLAY_NAME",
    "objects.1.name": "Amount of dubious batches in invoices\u0007Deviance from per capita budget\u0007Number of dubious batches in invoices",
    "objects.1.class": "Performance Indicator",
    "objects.1.ochapters.0.name": "General information",
    "objects.1.ochapters.0.attributes.0.name": "Name",
    "objects.1.ochapters.0.attributes.0.value": "Amount of dubious batches in invoices\u0007Deviance from per capita budget\u0007Number of dubious batches in invoices",
    "objects.1.ochapters.0.attributes.0.searchname": "NAME",
    "objects.1.ochapters.0.attributes.1.name": "Order",
    "objects.1.ochapters.0.attributes.1.value": "06 kpi\u000702 kpi",
    "objects.1.ochapters.0.attributes.1.searchname": "A_ORDER",
    "objects.1.ochapters.0.attributes.2.name": "Description",
    "objects.1.ochapters.0.attributes.2.value": "The indicator informs on monetary sum of all unclear items in all invoices after the trip.\u0007The indicator informs about the deviance from the budgeted expenditures per person.\u0007The indicator informs on the number of unclear items in all invoices after the trip.",
    "objects.1.ochapters.0.attributes.2.searchname": "A_DESCRIPTION",
    "objects.1.ochapters.1.name": "Organisation",
    "objects.1.ochapters.1.attributes.0.name": "Responsible person",
    "objects.1.ochapters.1.attributes.0.searchname": "RC_IS_APPLICATION_OWNER",
    "objects.1.ochapters.1.attributes.0.value": "Treasurer",
    "objects.1.ochapters.2.name": "Details",
    "objects.1.ochapters.2.attributes.0.name": "Target value",
    "objects.1.ochapters.2.attributes.0.value": 5,
    "objects.1.ochapters.2.attributes.0.searchname": "A_TARGET_VALUE",
    "objects.1.ochapters.2.attributes.1.name": "Current value",
    "objects.1.ochapters.2.attributes.1.value": 6,
    "objects.1.ochapters.2.attributes.1.searchname": "A_CURRENT_VALUE",
    "objects.1.ochapters.2.attributes.2.name": "Type of tolerance",
    "objects.1.ochapters.2.attributes.2.value": "Relative\u0007Absolute",
    "objects.1.ochapters.2.attributes.2.searchname": "TYPE_OF_TOLERANCE",
    "objects.1.ochapters.2.attributes.3.name": "Limit type\u0007Unit",
    "objects.1.ochapters.2.attributes.3.value": "Less is better\u0007[EUR]\u0007[#]",
    "objects.1.ochapters.2.attributes.3.searchname": "LIMIT_TYPE\u0007UNIT",
    "objects.1.ochapters.2.attributes.4.name": "Threshold green/yellow\u0007Limit type",
    "objects.1.ochapters.2.attributes.4.value": "Less is better",
    "objects.1.ochapters.2.attributes.4.searchname": "THRESHOLD_GREENYELLOW\u0007LIMIT_TYPE",
    "objects.1.ochapters.2.attributes.5.name": "Threshold yellow/red\u0007Threshold green/yellow",
    "objects.1.ochapters.2.attributes.5.value": 1,
    "objects.1.ochapters.2.attributes.5.searchname": "THRESHOLD_YELLOWRED\u0007THRESHOLD_GREENYELLOW",
    "objects.1.ochapters.2.attributes.6.name": "Value history\u0007Threshold yellow/red",
    "objects.1.ochapters.2.attributes.6.value": 3,
    "objects.1.ochapters.2.attributes.6.searchname": "A_VALUE_HISTORY\u0007THRESHOLD_YELLOWRED",
    "objects.1.ochapters.2.attributes.7.name": "Value history\u0007State",
    "objects.1.ochapters.2.attributes.7.value": "Yellow",
    "objects.1.ochapters.2.attributes.7.searchname": "A_VALUE_HISTORY\u0007A_STATE_KPI",
    "objects.1.ochapters.2.attributes.8.name": "Value history",
    "objects.1.ochapters.2.attributes.8.value.0.name": "Current value",
    "objects.1.ochapters.2.attributes.8.value.0.values.0": 6,
    "objects.1.ochapters.2.attributes.8.value.1.name": "Target value",
    "objects.1.ochapters.2.attributes.8.value.1.values.0": 5,
    "objects.1.ochapters.2.attributes.8.value.2.name": "State",
    "objects.1.ochapters.2.attributes.8.value.2.values.0": "Yellow",
    "objects.1.ochapters.2.attributes.8.value.3.name": "Date",
    "objects.1.ochapters.2.attributes.8.value.3.values.0": "15.01.2015 15:33",
    "objects.1.ochapters.2.attributes.8.searchname": "A_VALUE_HISTORY",
    "objects.1.ochapters.3.name": "Continuous improvement",
    "objects.1.ochapters.3.attributes": [],
    "objects.1.ochapters.4.name": "Compliance",
    "objects.1.ochapters.4.attributes": [],
    "objects.1.ochapters.5.name": "Changes",
    "objects.1.ochapters.5.attributes.0.name": "Creation date",
    "objects.1.ochapters.5.attributes.0.value": "01.01.1970 01:00",
    "objects.1.ochapters.5.attributes.0.searchname": "CREATION_DATE",
    "objects.1.ochapters.5.attributes.1.name": "Date of last change\u0007Last editor",
    "objects.1.ochapters.5.attributes.1.value": "01.01.1970 01:00\u0007guest",
    "objects.1.ochapters.5.attributes.1.searchname": "DATE_OF_LAST_CHANGE\u0007LAST_EDITOR",
    "objects.1.ochapters.5.attributes.2.name": "Date of last change",
    "objects.1.ochapters.5.attributes.2.value": "22.05.2019 17:44",
    "objects.1.ochapters.5.attributes.2.searchname": "DATE_OF_LAST_CHANGE",
    "objects.1.ochapters.6.name": "Lifecycle",
    "objects.1.ochapters.6.attributes": [],
    "objects.1.ochapters.7.name": "Attachments",
    "objects.1.ochapters.7.attributes": [],
    "objects.1.ochapters.8.name": "Representation",
    "objects.1.ochapters.8.attributes.0.name": "Font size",
    "objects.1.ochapters.8.attributes.0.value": 180,
    "objects.1.ochapters.8.attributes.0.searchname": "FONT_SIZE",
    "objects.2.name": "Budget plan\u0007Dubious batches\u0007Evaluation result\u0007Feedback form\u0007Feedback on adherence to budget\u0007Feedback on single batches\u0007Filled feedback form\u0007Information on deviance",
    "objects.2.class": "Message",
    "objects.2.ochapters.0.name": "General information",
    "objects.2.ochapters.0.attributes.0.name": "Name",
    "objects.2.ochapters.0.attributes.0.value": "Budget plan\u0007Dubious batches\u0007Evaluation result\u0007Feedback form\u0007Feedback on adherence to budget\u0007Feedback on single batches\u0007Filled feedback form\u0007Information on deviance",
    "objects.2.ochapters.0.attributes.0.searchname": "NAME",
    "objects.2.ochapters.0.attributes.1.name": "Message type",
    "objects.2.ochapters.0.attributes.1.value": "Initiating\u0007Non-initiating",
    "objects.2.ochapters.0.attributes.1.searchname": "MESSAGE_TYPE",
    "objects.2.ochapters.1.name": "Object properties",
    "objects.2.ochapters.1.attributes": [],
    "objects.2.ochapters.2.name": "Changes",
    "objects.2.ochapters.2.attributes": [],
    "objects.2.ochapters.3.name": "Attachments",
    "objects.2.ochapters.3.attributes": [],
    "objects.3.name": "Budgeted expenditures properly kept?\u0007Credit card statements and account activities correct?\u0007Credit card statements and account statements entirely verified?\u0007Does feedback arrive within the set time period?\u0007Settlement successful?",
    "objects.3.class": "Exclusive Gateway",
    "objects.3.ochapters.0.name": "General information",
    "objects.3.ochapters.0.attributes.0.name": "Name",
    "objects.3.ochapters.0.attributes.0.value": "Budgeted expenditures properly kept?\u0007Credit card statements and account activities correct?\u0007Credit card statements and account statements entirely verified?\u0007Does feedback arrive within the set time period?\u0007Settlement successful?",
    "objects.3.ochapters.0.attributes.0.searchname": "NAME",
    "objects.3.ochapters.0.attributes.1.name": "Order",
    "objects.3.ochapters.0.attributes.1.value": 7,
    "objects.3.ochapters.0.attributes.1.searchname": "A_ORDER",
    "objects.3.ochapters.1.name": "Object properties",
    "objects.3.ochapters.1.attributes.0.name": "Type",
    "objects.3.ochapters.1.attributes.0.value": "Data-based\u0007Event-based",
    "objects.3.ochapters.1.attributes.0.searchname": "TYPE_EXCLUSIVE_GATEWAY",
    "objects.3.ochapters.2.name": "Changes",
    "objects.3.ochapters.2.attributes": [],
    "objects.3.ochapters.3.name": "Attachments",
    "objects.3.ochapters.3.attributes": [],
    "objects.3.ochapters.4.name": "Representation",
    "objects.3.ochapters.4.attributes.0.name": "Representation (name)",
    "objects.3.ochapters.4.attributes.0.value": "below\u0007do not show",
    "objects.3.ochapters.4.attributes.0.searchname": "REPRESENTATION_NAME_GATEWAY",
    "objects.4.name": "Check credit card statements and account activities\u0007Consolidate feedback\u0007Control adherence to budget plan\u0007Distribute evaluation results among travelers\u0007Inform travelers\u0007Request feedback electronically\u0007Select mode for traveler satisfaction query\u0007Verify and settle dubious batches",
    "objects.4.class": "Task",
    "objects.4.ochapters.0.name": "General information",
    "objects.4.ochapters.0.attributes.0.name": "Name",
    "objects.4.ochapters.0.attributes.0.value": "Check credit card statements and account activities\u0007Consolidate feedback\u0007Control adherence to budget plan\u0007Distribute evaluation results among travelers\u0007Inform travelers\u0007Request feedback electronically\u0007Select mode for traveler satisfaction query\u0007Verify and settle dubious batches",
    "objects.4.ochapters.0.attributes.0.searchname": "NAME",
    "objects.4.ochapters.0.attributes.1.name": "Order",
    "objects.4.ochapters.0.attributes.1.value": 6,
    "objects.4.ochapters.0.attributes.1.searchname": "A_ORDER",
    "objects.4.ochapters.0.attributes.2.name": "Description",
    "objects.4.ochapters.0.attributes.2.value": "All invoices must be verified in detail irrespective of adherence to the budget.\u0007All feedback (verbal and written) shall be consolidated and its content must be evaluated. Conclusions shall be made from the feedback which hence shall be considered as recommendations for future travel planning phases.\u0007Control the current status of the vacation fund.\nIs there a deviance from the planned budget per capita (higher or lower)?If so, how high is the deviance per capita?What are the reasons for the deviance from the budget plan?Has the deviance led to any significant changes in the (road) trip (improvements/impairments)?\u0007Due to reasons of absolute transparency all evaluation results must be distributed amongs all travelers. It must be assured that those responsible for the trip read and reflect on the results. The evaluation results shall be considered during any future trip planning.\u0007All travelers shall be informed about the noted deviance.\nIn case of negative deviation (budget per capita was not exploitet completely) no negative reaction is to be expected. In case of positive deviation (budget per capita did not suffice to cover the expenses at all) the general satisfaction level might suffer which may put those responsible for the trip in a bad light.\n\nIn case of a deviation from the budget plan the settlement process shall be triggered with the treasurer. If credit card statements and account statements have already been verified the evaluation of the travelers' satisfaction may begin. If not then these verification procedures have to be completed first.\u0007An email shall be sent to all travelers containing the feedback form. It shall be polite but not too presumptuous. The email should mention a deadline for returning the filled feedback form in order to assure timely retrieval and evaluation of the feedback.\u0007All travelers' satisfaction with the road trip shall be assessed. There are numerous possibilities to do so:\na) in expectation of mostly positive feedback on the trip organisation: invite all travelers to a nice and jovial dinner in order to find out how the land lies\nb) in cases of reasonable suspicion that some if not all of the travelers might react agressively when being confronted with said trip again: after a considerable cool down phase a conciliating email shall be sent to all those aggrieved; it is highly recommended to watch one's back while being in public spaces.\nIn both cases autonomous inquiry using an evaluable feedback form might prove useful.\u0007All unclear or dubious amounts have to be verified and settled. It may be required to contact the institutions that have sent the corresponding invoices to clarify their origin and to insist on clarification.",
    "objects.4.ochapters.0.attributes.2.searchname": "A_DESCRIPTION_CS",
    "objects.4.ochapters.0.attributes.3.name": "Task type",
    "objects.4.ochapters.0.attributes.3.value": "Manual\u0007Send",
    "objects.4.ochapters.0.attributes.3.searchname": "TYPE_TASK",
    "objects.4.ochapters.0.attributes.4.name": "Classification",
    "objects.4.ochapters.0.attributes.4.value": "ENUMLIST",
    "objects.4.ochapters.0.attributes.4.searchname": "CLASSIFICATION",
    "objects.4.ochapters.1.name": "RACI",
    "objects.4.ochapters.1.attributes.0.name": "Responsible for execution",
    "objects.4.ochapters.1.attributes.0.searchname": "RESPONSIBLE_FOR_EXECUTION",
    "objects.4.ochapters.1.attributes.0.value": "Controler",
    "objects.4.ochapters.1.attributes.1.name": "Consulted\u0007To inform",
    "objects.4.ochapters.1.attributes.1.searchname": "COOPERATIONPARTICIPATION\u0007TO_INFORM",
    "objects.4.ochapters.1.attributes.1.value": "Treasurer\u0007Roadtrip participant",
    "objects.4.ochapters.2.name": "Input/Output",
    "objects.4.ochapters.2.attributes.0.name": "Referenced documents\u0007Data input",
    "objects.4.ochapters.2.attributes.0.searchname": "RC_REFERENCED_DOCUMENTS_M\u0007RC_REFERENCED_INPUT_DATA_OPTIONAL_M",
    "objects.4.ochapters.2.attributes.0.value": "•Budget plan roadtrip 1.00\n•Budget plan roadtrip 1.01\u0007Check list travel follow-up 1.00\u0007•Feedback questionnaire 1.00\n•Feedback questionnaire 1.02",
    "objects.4.ochapters.3.name": "Continuous improvement",
    "objects.4.ochapters.3.attributes": [],
    "objects.4.ochapters.4.name": "Risks",
    "objects.4.ochapters.4.attributes.0.name": "Assigned risks",
    "objects.4.ochapters.4.attributes.0.searchname": "RISK",
    "objects.4.ochapters.4.attributes.0.value": "Demonstration of resentment and roaring protest\u0007Misinterpretation",
    "objects.4.ochapters.5.name": "Controls",
    "objects.4.ochapters.5.attributes": [],
    "objects.4.ochapters.6.name": "Systems/Products",
    "objects.4.ochapters.6.attributes.0.name": "Referenced applications/IT system elements",
    "objects.4.ochapters.6.attributes.0.searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
    "objects.4.ochapters.6.attributes.0.value": "•E-Banking application\n•Revenue check credit card\u0007Spreadsheet calculator\u0007•Email\n•Spreadsheet calculator\u0007•Email\n•Social network platform",
    "objects.4.ochapters.7.name": "Object properties",
    "objects.4.ochapters.7.attributes": [],
    "objects.4.ochapters.8.name": "Standard (loop)",
    "objects.4.ochapters.8.attributes": [],
    "objects.4.ochapters.9.name": "Multi-instances (loop)",
    "objects.4.ochapters.9.attributes": [],
    "objects.4.ochapters.10.name": "Details",
    "objects.4.ochapters.10.attributes": [],
    "objects.4.ochapters.11.name": "Changes",
    "objects.4.ochapters.11.attributes": [],
    "objects.4.ochapters.12.name": "Attachments",
    "objects.4.ochapters.12.attributes": [],
    "objects.4.ochapters.13.name": "Simulation data",
    "objects.4.ochapters.13.attributes.0.name": "Execution time",
    "objects.4.ochapters.13.attributes.0.value": "0:000:00:12:00\u00070:000:00:45:00\u00070:000:00:20:00\u00070:000:00:03:00\u00070:000:00:04:00\u00070:000:00:06:00\u00070:000:00:08:00",
    "objects.4.ochapters.13.attributes.0.searchname": "A_EXECUTION_TIME",
    "objects.4.ochapters.13.attributes.1.name": "Waiting time\u0007Resting time",
    "objects.4.ochapters.13.attributes.1.value": "0:000:00:02:00\u00070:000:00:30:00\u00070:000:00:00:01\u00070:000:00:00:04\u00070:000:00:01:00\u00070:000:00:01:30\u00070:000:00:00:02",
    "objects.4.ochapters.13.attributes.1.searchname": "A_WAITING_TIME\u0007A_RESTING_TIME",
    "objects.4.ochapters.13.attributes.2.name": "Resting time\u0007Transport time",
    "objects.4.ochapters.13.attributes.2.value": "0:000:00:00:04\u00070:000:00:00:03\u00070:000:00:00:05\u00070:000:00:01:00\u00070:000:00:00:10",
    "objects.4.ochapters.13.attributes.2.searchname": "A_RESTING_TIME\u0007A_TRANSPORT_TIME",
    "objects.4.ochapters.13.attributes.3.name": "Transport time",
    "objects.4.ochapters.13.attributes.3.value": "0:000:00:00:03\u00070:000:00:00:09",
    "objects.4.ochapters.13.attributes.3.searchname": "A_TRANSPORT_TIME",
    "objects.4.ochapters.14.name": "Representation",
    "objects.4.ochapters.14.attributes.0.name": "Representation (Name)",
    "objects.4.ochapters.14.attributes.0.value": "inside",
    "objects.4.ochapters.14.attributes.0.searchname": "REPRESENTATION_NAME_TASK",
    "objects.4.ochapters.14.attributes.1.name": "Show responsible for execution",
    "objects.4.ochapters.14.attributes.1.value": "tak",
    "objects.4.ochapters.14.attributes.1.searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION",
    "objects.4.ochapters.14.attributes.2.name": "Show symbol (&quot;i&quot;) when a description is entered",
    "objects.4.ochapters.14.attributes.2.value": "tak",
    "objects.4.ochapters.14.attributes.2.searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION",
    "objects.4.ochapters.14.attributes.3.name": "Show accountable for approving results",
    "objects.4.ochapters.14.attributes.3.value": "tak",
    "objects.4.ochapters.14.attributes.3.searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS",
    "objects.4.ochapters.14.attributes.4.name": "Show consulted",
    "objects.4.ochapters.14.attributes.4.value": "tak",
    "objects.4.ochapters.14.attributes.4.searchname": "DISPLAY_COOPERATIONPARTICIPATION",
    "objects.4.ochapters.14.attributes.5.name": "Show to inform",
    "objects.4.ochapters.14.attributes.5.value": "tak",
    "objects.4.ochapters.14.attributes.5.searchname": "DISPLAY_TO_INFORM",
    "objects.4.ochapters.14.attributes.6.name": "Show symbol when risks exist",
    "objects.4.ochapters.14.attributes.6.value": "tak",
    "objects.4.ochapters.14.attributes.6.searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS",
    "objects.5.name": "Controller",
    "objects.5.class": "Lane",
    "objects.5.ochapters.0.name": "General information",
    "objects.5.ochapters.0.attributes.0.name": "Name",
    "objects.5.ochapters.0.attributes.0.value": "Controller",
    "objects.5.ochapters.0.attributes.0.searchname": "NAME",
    "objects.5.ochapters.0.attributes.1.name": "Resource",
    "objects.5.ochapters.0.attributes.1.searchname": "RC_RESOURCE",
    "objects.5.ochapters.0.attributes.1.value": "Controler",
    "objects.5.ochapters.1.name": "Partner properties",
    "objects.5.ochapters.1.attributes": [],
    "objects.5.ochapters.2.name": "Changes",
    "objects.5.ochapters.2.attributes": [],
    "objects.5.ochapters.3.name": "Attachments",
    "objects.5.ochapters.3.attributes": [],
    "objects.5.ochapters.4.name": "Representation",
    "objects.5.ochapters.4.attributes.0.name": "Colour",
    "objects.5.ochapters.4.attributes.0.value": 16777215,
    "objects.5.ochapters.4.attributes.0.searchname": "COLOUR",
    "objects.5.ochapters.4.attributes.1.name": "Transparency",
    "objects.5.ochapters.4.attributes.1.value": "100%",
    "objects.5.ochapters.4.attributes.1.searchname": "A_TRANSPARENCY",
    "objects.5.ochapters.4.attributes.2.name": "Display watermarks",
    "objects.5.ochapters.4.attributes.2.value": "nie",
    "objects.5.ochapters.4.attributes.2.searchname": "A_DISPLAY_WATERMARK",
    "objects.5.ochapters.4.attributes.3.name": "Alignment",
    "objects.5.ochapters.4.attributes.3.value": "Middle",
    "objects.5.ochapters.4.attributes.3.searchname": "A_WATERMARK_ALIGNMENT_VERTICAL",
    "objects.6.name": "Evaluation\u0007Traveler\u0007Treasurer",
    "objects.6.class": "Pool",
    "objects.6.ochapters.0.name": "General information",
    "objects.6.ochapters.0.attributes.0.name": "Name",
    "objects.6.ochapters.0.attributes.0.value": "Evaluation\u0007Traveler\u0007Treasurer",
    "objects.6.ochapters.0.attributes.0.searchname": "NAME",
    "objects.6.ochapters.0.attributes.1.name": "Rotate text by 90 degrees\u0007Black-box pool",
    "objects.6.ochapters.0.attributes.1.value": "nie\u0007tak",
    "objects.6.ochapters.0.attributes.1.searchname": "A_ROTATE_BLACKPOOL_TEXT\u0007A_BLACK_BOX_POOL",
    "objects.6.ochapters.0.attributes.2.name": "Rotate text by 90 degrees",
    "objects.6.ochapters.0.attributes.2.value": "nie",
    "objects.6.ochapters.0.attributes.2.searchname": "A_ROTATE_BLACKPOOL_TEXT",
    "objects.6.ochapters.1.name": "Process properties",
    "objects.6.ochapters.1.attributes": [],
    "objects.6.ochapters.2.name": "Partner properties",
    "objects.6.ochapters.2.attributes.0.name": "Minimum\u0007Referenced partner (role)",
    "objects.6.ochapters.2.attributes.0.value": "Roadtrip participant\u0007Treasurer",
    "objects.6.ochapters.2.attributes.0.searchname": "MULTIPLICITY_MIN\u0007RC_REFERENCED_PARTNER_ROLE",
    "objects.6.ochapters.2.attributes.1.name": "Maximum\u0007Minimum",
    "objects.6.ochapters.2.attributes.1.value": 0,
    "objects.6.ochapters.2.attributes.1.searchname": "MULTIPLICITY_MAX\u0007MULTIPLICITY_MIN",
    "objects.6.ochapters.2.attributes.2.name": "Maximum",
    "objects.6.ochapters.2.attributes.2.value": 1,
    "objects.6.ochapters.2.attributes.2.searchname": "MULTIPLICITY_MAX",
    "objects.6.ochapters.3.name": "Changes",
    "objects.6.ochapters.3.attributes": [],
    "objects.6.ochapters.4.name": "Attachments",
    "objects.6.ochapters.4.attributes": [],
    "objects.6.ochapters.5.name": "Representation",
    "objects.6.ochapters.5.attributes.0.name": "Colour\u0007Visualised values",
    "objects.6.ochapters.5.attributes.0.value": "Referenced partner (Role)",
    "objects.6.ochapters.5.attributes.0.searchname": "COLOUR\u0007VISUALIZED_VALUES_POOL",
    "objects.6.ochapters.5.attributes.1.name": "Transparency\u0007Colour",
    "objects.6.ochapters.5.attributes.1.value": "100%\u000716777215",
    "objects.6.ochapters.5.attributes.1.searchname": "A_TRANSPARENCY\u0007COLOUR",
    "objects.6.ochapters.5.attributes.2.name": "Display watermarks\u0007Transparency",
    "objects.6.ochapters.5.attributes.2.value": "nie\u0007100%",
    "objects.6.ochapters.5.attributes.2.searchname": "A_DISPLAY_WATERMARK\u0007A_TRANSPARENCY",
    "objects.6.ochapters.5.attributes.3.name": "Alignment\u0007Display watermarks",
    "objects.6.ochapters.5.attributes.3.value": "Middle\u0007nie",
    "objects.6.ochapters.5.attributes.3.searchname": "A_WATERMARK_ALIGNMENT_VERTICAL\u0007A_DISPLAY_WATERMARK",
    "objects.6.ochapters.5.attributes.4.name": "Alignment",
    "objects.6.ochapters.5.attributes.4.value": "Middle",
    "objects.6.ochapters.5.attributes.4.searchname": "A_WATERMARK_ALIGNMENT_VERTICAL",
    "objects.7.name": "Evaluation results sent",
    "objects.7.class": "End Event",
    "objects.7.ochapters.0.name": "General information",
    "objects.7.ochapters.0.attributes.0.name": "Name",
    "objects.7.ochapters.0.attributes.0.value": "Evaluation results sent",
    "objects.7.ochapters.0.attributes.0.searchname": "NAME",
    "objects.7.ochapters.0.attributes.1.name": "Order",
    "objects.7.ochapters.0.attributes.1.value": 19,
    "objects.7.ochapters.0.attributes.1.searchname": "A_ORDER",
    "objects.7.ochapters.1.name": "Event type",
    "objects.7.ochapters.1.attributes": [],
    "objects.7.ochapters.2.name": "Object properties",
    "objects.7.ochapters.2.attributes": [],
    "objects.7.ochapters.3.name": "Details",
    "objects.7.ochapters.3.attributes": [],
    "objects.7.ochapters.4.name": "Changes",
    "objects.7.ochapters.4.attributes": [],
    "objects.7.ochapters.5.name": "Attachments",
    "objects.7.ochapters.5.attributes": [],
    "objects.7.ochapters.6.name": "Representation",
    "objects.7.ochapters.6.attributes.0.name": "Display name",
    "objects.7.ochapters.6.attributes.0.value": "tak",
    "objects.7.ochapters.6.attributes.0.searchname": "DISPLAY_NAME",
    "objects.8.name": "Feedback received\u0007Period has expired",
    "objects.8.class": "Intermediate Event (sequence flow)",
    "objects.8.ochapters.0.name": "General information",
    "objects.8.ochapters.0.attributes.0.name": "Name",
    "objects.8.ochapters.0.attributes.0.value": "Feedback received\u0007Period has expired",
    "objects.8.ochapters.0.attributes.0.searchname": "NAME",
    "objects.8.ochapters.0.attributes.1.name": "Order",
    "objects.8.ochapters.0.attributes.1.value": 16,
    "objects.8.ochapters.0.attributes.1.searchname": "A_ORDER",
    "objects.8.ochapters.1.name": "Event type",
    "objects.8.ochapters.1.attributes.0.name": "Type",
    "objects.8.ochapters.1.attributes.0.value": "catching",
    "objects.8.ochapters.1.attributes.0.searchname": "TYPE_INTERMEDIATE_EVENT",
    "objects.8.ochapters.1.attributes.1.name": "Message\u0007Timer",
    "objects.8.ochapters.1.attributes.1.value": "tak",
    "objects.8.ochapters.1.attributes.1.searchname": "TRIGGER_MESSAGE\u0007TRIGGER_TIMER",
    "objects.8.ochapters.2.name": "Input/Output",
    "objects.8.ochapters.2.attributes": [],
    "objects.8.ochapters.3.name": "Object properties",
    "objects.8.ochapters.3.attributes": [],
    "objects.8.ochapters.4.name": "Details",
    "objects.8.ochapters.4.attributes": [],
    "objects.8.ochapters.5.name": "Changes",
    "objects.8.ochapters.5.attributes": [],
    "objects.8.ochapters.6.name": "Attachments",
    "objects.8.ochapters.6.attributes": [],
    "objects.8.ochapters.7.name": "Representation",
    "objects.8.ochapters.7.attributes.0.name": "Display name",
    "objects.8.ochapters.7.attributes.0.value": "tak",
    "objects.8.ochapters.7.attributes.0.searchname": "DISPLAY_NAME",
    "objects.8.ochapters.7.attributes.1.name": "Visualised values",
    "objects.8.ochapters.7.attributes.1.value": "Name",
    "objects.8.ochapters.7.attributes.1.searchname": "A_VISUALIZED_VALUES_EVENT"
}

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

var arraytotable = []
var elementminus1 =""
Object.keys(data).forEach(element => {
    // console.log(data[element])
    let splited =  element.split('.');
    // console.log(splited[splited.length-1].length);
    // console.log(element.substring(0, element.length-(splited[splited.length-1].length+1)))
     if (element.substring(0, element.length-(splited[splited.length-1].length+1))===elementminus1)
{
//    console.log(arraytotable[arraytotable.length-1])
if( typeof arraytotable[arraytotable.length-1]!=='undefined'){
   let tempobj=arraytotable[arraytotable.length-1];
//    console.log(tempobj)
//    console.log(splited[splited.length-1])
//    console.log(tempobj[splited[splited.length-1]])
    tempobj[splited[splited.length-1]]=data[element];
    // console.log("rowna")
    // arraytotable[]
}
}
else{
    let tempobj = {}
    // console.log(splited[splited.length-1])
     tempobj[splited[splited.length-1]]=data[element];

        arraytotable.push(tempobj)
}
    // console.log(splited[splited.length-1])
    // element.split('.')[element.split('.').length-1]

    // arraytotable.push(createData('Cupcake', 305, 3.7, 67, 4.3))
    elementminus1=element.substring(0, element.length-(splited[splited.length-1].length+1))
});
// var groupedobjects = groupBy(data, splited[splited.length-1]);
// console.log(groupedobjects)

    //  console.log(arraytotable)


// var rows =[
//     {name: "Name",
// value: "Evaluate Roadtrip",
// searchname: "NAME"}
// ]

var testdata = {
    "name": "Evaluate road trip (Region A)eee",
    "class": "Business Process Diagram",
    "chapters": [{
        "name": "General information",
        "attributes": [{
            "name": "Name",
            "value": "Evaluate road trip (Region A)eee",
            "searchname": "NAME"
        }, {
            "name": "Description",
            "value": "The process aims at controlling adherence to the budget and at assessing satisfaction with the trip organisation and the trip itself.\nThis variant is valid for all offices in Region A.",
            "searchname": "A_DESCRIPTION"
        }, {
            "name": "Aim",
            "value": "* Control of the budget plan\n* Inquiry on satisfaction",
            "searchname": "AIM"
        }, {
            "name": "Trigger",
            "value": "All invoices have arrived (after returning from the trip)",
            "searchname": "TRIGGER"
        }, {
            "name": "Result",
            "value": "* All dubious batches have been resolved/settled\n* All travelers have been informed about the budget situation\n* All travelers have had the chance to provide feedback\n* From the received feedback recommendations could be derived for future trips and travel planning",
            "searchname": "RESULT"
        }]
    }, {
        "name": "Organisation",
        "attributes": [{
            "name": "Process owner",
            "searchname": "RC_OWNER",
            "value": "guest"
        }]
    }, {
        "name": "Classification",
        "attributes": [{
            "name": "Process type",
            "value": "Management process",
            "searchname": "PROCESS_TYPE_ACCORDING_TO_ISO_9000"
        }, {
            "name": "Predictability",
            "value": "With ad-hoc exceptions",
            "searchname": "A_PREDICTABILITY"
        }, {
            "name": "Complexity",
            "value": "Average",
            "searchname": "A_COMPLEXITY"
        }, {
            "name": "Process frequency",
            "value": "Few times per year",
            "searchname": "A_PROCESS_FREQUENCY"
        }, {
            "name": "Business value",
            "value": "Important",
            "searchname": "A_BUSINSS_VALUE"
        }, {
            "name": "Key process",
            "value": "No",
            "searchname": "KEY_PROCESS"
        }]
    }, {
        "name": "Potential and maturity analysis",
        "attributes": []
    }, {
        "name": "Input/Output",
        "attributes": []
    }, {
        "name": "Documents",
        "attributes": [{
            "name": "Terms, abbreviations",
            "value": [{
                "name": "Term",
                "values": ["", "", "", "", "", "", "", ""]
            }, {
                "name": "Description",
                "values": ["", "", "", "", "", "", "", ""]
            }],
            "searchname": "TERMS_ABBREVIATIONS"
        }]
    }, {
        "name": "Customers/Providers",
        "attributes": []
    }, {
        "name": "Continuous improvement",
        "attributes": []
    }, {
        "name": "Risk management",
        "attributes": []
    }, {
        "name": "Compliance",
        "attributes": []
    }, {
        "name": "Systems/Products",
        "attributes": []
    }, {
        "name": "Properties",
        "attributes": []
    }, {
        "name": "Lifecycle",
        "attributes": [{
            "name": "State",
            "value": "Draft",
            "searchname": "MFB_RWF_STATE"
        }, {
            "name": "Valid from",
            "value": "02.08.2015",
            "searchname": "A_MFB_RWF_VALID_FROM_DATE"
        }, {
            "name": "Valid until",
            "value": "02.08.2019",
            "searchname": "A_MFB_RWF_VALID_UNTIL_DATE"
        }, {
            "name": "Resubmission date",
            "value": "02.07.2019",
            "searchname": "A_MFB_RWF_RESUBMISSION_DATE"
        }]
    }, {
        "name": "Attachments",
        "attributes": []
    }, {
        "name": "Process execution",
        "attributes": []
    }, {
        "name": "System information",
        "attributes": [{
            "name": "Author",
            "value": "guest",
            "searchname": "AUTHOR"
        }, {
            "name": "Creation date",
            "value": "08.01.2020 11:45",
            "searchname": "CREATION_DATE"
        }, {
            "name": "Last editor",
            "value": "guest",
            "searchname": "LAST_EDITOR"
        }, {
            "name": "Date of last change",
            "value": "08.01.2020 12:04",
            "searchname": "DATE_OF_LAST_CHANGE"
        }, {
            "name": "Number of objects and relations",
            "value": 68,
            "searchname": "NUMBER_OF_OBJECTS_AND_RELATIONS"
        }]
    }],
    "objects": [{
        "name": "All invoices arrived",
        "class": "Start Event",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "All invoices arrived",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 1,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Event type",
            "attributes": [{
                "name": "Type",
                "value": "Top level",
                "searchname": "EVENT_TYPE"
            }, {
                "name": "Condition",
                "value": "tak",
                "searchname": "TRIGGER_CONDITION"
            }]
        }, {
            "name": "Output",
            "attributes": []
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Quantity",
                "value": 90,
                "searchname": "A_QUANTITY"
            }, {
                "name": "Time period",
                "value": "Per month",
                "searchname": "TIME_PERIOD"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Display name",
                "value": "tak",
                "searchname": "DISPLAY_NAME"
            }]
        }]
    }, {
        "name": "Amount of dubious batches in invoices",
        "class": "Performance Indicator",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Amount of dubious batches in invoices",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": "06 kpi",
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "The indicator informs on monetary sum of all unclear items in all invoices after the trip.",
                "searchname": "A_DESCRIPTION"
            }]
        }, {
            "name": "Organisation",
            "attributes": [{
                "name": "Responsible person",
                "searchname": "RC_IS_APPLICATION_OWNER",
                "value": "Treasurer"
            }]
        }, {
            "name": "Details",
            "attributes": [{
                "name": "Target value",
                "value": 100,
                "searchname": "A_TARGET_VALUE"
            }, {
                "name": "Current value",
                "value": 80,
                "searchname": "A_CURRENT_VALUE"
            }, {
                "name": "Type of tolerance",
                "value": "Relative",
                "searchname": "TYPE_OF_TOLERANCE"
            }, {
                "name": "Limit type",
                "value": "Less is better",
                "searchname": "LIMIT_TYPE"
            }, {
                "name": "Threshold green/yellow",
                "value": 5,
                "searchname": "THRESHOLD_GREENYELLOW"
            }, {
                "name": "Threshold yellow/red",
                "value": 10,
                "searchname": "THRESHOLD_YELLOWRED"
            }, {
                "name": "Value history",
                "value": [{
                    "name": "Current value",
                    "values": [80]
                }, {
                    "name": "Target value",
                    "values": [100]
                }, {
                    "name": "State",
                    "values": ["Green"]
                }, {
                    "name": "Date",
                    "values": ["15.01.2015 15:33"]
                }],
                "searchname": "A_VALUE_HISTORY"
            }]
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Compliance",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": [{
                "name": "Creation date",
                "value": "01.01.1970 01:00",
                "searchname": "CREATION_DATE"
            }, {
                "name": "Date of last change",
                "value": "01.01.1970 01:00",
                "searchname": "DATE_OF_LAST_CHANGE"
            }]
        }, {
            "name": "Lifecycle",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Font size",
                "value": 180,
                "searchname": "FONT_SIZE"
            }]
        }]
    }, {
        "name": "Budget plan",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Budget plan",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Budgeted expenditures properly kept?",
        "class": "Exclusive Gateway",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Budgeted expenditures properly kept?",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 3,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Object properties",
            "attributes": [{
                "name": "Type",
                "value": "Data-based",
                "searchname": "TYPE_EXCLUSIVE_GATEWAY"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (name)",
                "value": "below",
                "searchname": "REPRESENTATION_NAME_GATEWAY"
            }]
        }]
    }, {
        "name": "Check credit card statements and account activities",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Check credit card statements and account activities",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 4,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "All invoices must be verified in detail irrespective of adherence to the budget.",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Manual",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }, {
                "name": "Consulted",
                "searchname": "COOPERATIONPARTICIPATION",
                "value": "Treasurer"
            }]
        }, {
            "name": "Input/Output",
            "attributes": [{
                "name": "Referenced documents",
                "searchname": "RC_REFERENCED_DOCUMENTS_M",
                "value": "•Budget plan roadtrip 1.00\n•Budget plan roadtrip 1.01"
            }]
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": []
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": [{
                "name": "Referenced applications/IT system elements",
                "searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
                "value": "•E-Banking application\n•Revenue check credit card"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:12:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Waiting time",
                "value": "0:000:00:02:00",
                "searchname": "A_WAITING_TIME"
            }, {
                "name": "Resting time",
                "value": "0:000:00:00:04",
                "searchname": "A_RESTING_TIME"
            }, {
                "name": "Transport time",
                "value": "0:000:00:00:03",
                "searchname": "A_TRANSPORT_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }, {
        "name": "Consolidate feedback",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Consolidate feedback",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 17,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "All feedback (verbal and written) shall be consolidated and its content must be evaluated. Conclusions shall be made from the feedback which hence shall be considered as recommendations for future travel planning phases.",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Manual",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }]
        }, {
            "name": "Input/Output",
            "attributes": [{
                "name": "Referenced documents",
                "searchname": "RC_REFERENCED_DOCUMENTS_M",
                "value": "Check list travel follow-up 1.00"
            }]
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": []
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": [{
                "name": "Referenced applications/IT system elements",
                "searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
                "value": "Spreadsheet calculator"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:45:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Waiting time",
                "value": "0:000:00:30:00",
                "searchname": "A_WAITING_TIME"
            }, {
                "name": "Resting time",
                "value": "0:000:00:00:03",
                "searchname": "A_RESTING_TIME"
            }, {
                "name": "Transport time",
                "value": "0:000:00:00:09",
                "searchname": "A_TRANSPORT_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }, {
        "name": "Control adherence to budget plan",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Control adherence to budget plan",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 2,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "Control the current status of the vacation fund.\nIs there a deviance from the planned budget per capita (higher or lower)?If so, how high is the deviance per capita?What are the reasons for the deviance from the budget plan?Has the deviance led to any significant changes in the (road) trip (improvements/impairments)?",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Manual",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }, {
                "name": "Consulted",
                "searchname": "COOPERATIONPARTICIPATION",
                "value": "Treasurer"
            }]
        }, {
            "name": "Input/Output",
            "attributes": [{
                "name": "Referenced documents",
                "searchname": "RC_REFERENCED_DOCUMENTS_M",
                "value": "•Budget plan roadtrip 1.00\n•Budget plan roadtrip 1.01"
            }]
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": []
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": [{
                "name": "Referenced applications/IT system elements",
                "searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
                "value": "Spreadsheet calculator"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:20:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Resting time",
                "value": "0:000:00:00:01",
                "searchname": "A_RESTING_TIME"
            }, {
                "name": "Transport time",
                "value": "0:000:00:00:05",
                "searchname": "A_TRANSPORT_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }, {
        "name": "Controller",
        "class": "Lane",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Controller",
                "searchname": "NAME"
            }, {
                "name": "Resource",
                "searchname": "RC_RESOURCE",
                "value": "Controler"
            }]
        }, {
            "name": "Partner properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Colour",
                "value": 16777215,
                "searchname": "COLOUR"
            }, {
                "name": "Transparency",
                "value": "100%",
                "searchname": "A_TRANSPARENCY"
            }, {
                "name": "Display watermarks",
                "value": "nie",
                "searchname": "A_DISPLAY_WATERMARK"
            }, {
                "name": "Alignment",
                "value": "Middle",
                "searchname": "A_WATERMARK_ALIGNMENT_VERTICAL"
            }]
        }]
    }, {
        "name": "Credit card statements and account activities correct?",
        "class": "Exclusive Gateway",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Credit card statements and account activities correct?",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 5,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Object properties",
            "attributes": [{
                "name": "Type",
                "value": "Data-based",
                "searchname": "TYPE_EXCLUSIVE_GATEWAY"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (name)",
                "value": "below",
                "searchname": "REPRESENTATION_NAME_GATEWAY"
            }]
        }]
    }, {
        "name": "Credit card statements and account statements entirely verified?",
        "class": "Exclusive Gateway",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Credit card statements and account statements entirely verified?",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 9,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Object properties",
            "attributes": [{
                "name": "Type",
                "value": "Data-based",
                "searchname": "TYPE_EXCLUSIVE_GATEWAY"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (name)",
                "value": "below",
                "searchname": "REPRESENTATION_NAME_GATEWAY"
            }]
        }]
    }, {
        "name": "Deviance from per capita budget",
        "class": "Performance Indicator",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Deviance from per capita budget",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": "02 kpi",
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "The indicator informs about the deviance from the budgeted expenditures per person.",
                "searchname": "A_DESCRIPTION"
            }]
        }, {
            "name": "Organisation",
            "attributes": [{
                "name": "Responsible person",
                "searchname": "RC_IS_APPLICATION_OWNER",
                "value": "Treasurer"
            }]
        }, {
            "name": "Details",
            "attributes": [{
                "name": "Target value",
                "value": 200,
                "searchname": "A_TARGET_VALUE"
            }, {
                "name": "Current value",
                "value": 230,
                "searchname": "A_CURRENT_VALUE"
            }, {
                "name": "Type of tolerance",
                "value": "Absolute",
                "searchname": "TYPE_OF_TOLERANCE"
            }, {
                "name": "Unit",
                "value": "[EUR]",
                "searchname": "UNIT"
            }, {
                "name": "Limit type",
                "value": "Less is better",
                "searchname": "LIMIT_TYPE"
            }, {
                "name": "Threshold green/yellow",
                "value": 50,
                "searchname": "THRESHOLD_GREENYELLOW"
            }, {
                "name": "Threshold yellow/red",
                "value": 250,
                "searchname": "THRESHOLD_YELLOWRED"
            }, {
                "name": "Value history",
                "value": [{
                    "name": "Current value",
                    "values": [200, 230]
                }, {
                    "name": "Target value",
                    "values": [0, 0]
                }, {
                    "name": "State",
                    "values": ["Yellow", "Yellow"]
                }, {
                    "name": "Date",
                    "values": ["15.01.2015 15:33", "22.05.2019 17:43"]
                }],
                "searchname": "A_VALUE_HISTORY"
            }]
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Compliance",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": [{
                "name": "Creation date",
                "value": "01.01.1970 01:00",
                "searchname": "CREATION_DATE"
            }, {
                "name": "Last editor",
                "value": "guest",
                "searchname": "LAST_EDITOR"
            }, {
                "name": "Date of last change",
                "value": "22.05.2019 17:44",
                "searchname": "DATE_OF_LAST_CHANGE"
            }]
        }, {
            "name": "Lifecycle",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Font size",
                "value": 180,
                "searchname": "FONT_SIZE"
            }]
        }]
    }, {
        "name": "Distribute evaluation results among travelers",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Distribute evaluation results among travelers",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 18,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "Due to reasons of absolute transparency all evaluation results must be distributed amongs all travelers. It must be assured that those responsible for the trip read and reflect on the results. The evaluation results shall be considered during any future trip planning.",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Send",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }]
        }, {
            "name": "Input/Output",
            "attributes": []
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": []
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": [{
                "name": "Referenced applications/IT system elements",
                "searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
                "value": "•Email\n•Spreadsheet calculator"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:20:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Resting time",
                "value": "0:000:00:00:04",
                "searchname": "A_RESTING_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }, {
        "name": "Does feedback arrive within the set time period?",
        "class": "Exclusive Gateway",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Does feedback arrive within the set time period?",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 14,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Object properties",
            "attributes": [{
                "name": "Type",
                "value": "Event-based",
                "searchname": "TYPE_EXCLUSIVE_GATEWAY"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (name)",
                "value": "do not show",
                "searchname": "REPRESENTATION_NAME_GATEWAY"
            }]
        }]
    }, {
        "name": "Dubious batches",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Dubious batches",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Evaluation",
        "class": "Pool",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Evaluation",
                "searchname": "NAME"
            }, {
                "name": "Rotate text by 90 degrees",
                "value": "nie",
                "searchname": "A_ROTATE_BLACKPOOL_TEXT"
            }]
        }, {
            "name": "Process properties",
            "attributes": []
        }, {
            "name": "Partner properties",
            "attributes": [{
                "name": "Minimum",
                "value": 0,
                "searchname": "MULTIPLICITY_MIN"
            }, {
                "name": "Maximum",
                "value": 1,
                "searchname": "MULTIPLICITY_MAX"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Colour",
                "value": 16777215,
                "searchname": "COLOUR"
            }, {
                "name": "Transparency",
                "value": "100%",
                "searchname": "A_TRANSPARENCY"
            }, {
                "name": "Display watermarks",
                "value": "nie",
                "searchname": "A_DISPLAY_WATERMARK"
            }, {
                "name": "Alignment",
                "value": "Middle",
                "searchname": "A_WATERMARK_ALIGNMENT_VERTICAL"
            }]
        }]
    }, {
        "name": "Evaluation result",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Evaluation result",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Non-initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Evaluation results sent",
        "class": "End Event",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Evaluation results sent",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 19,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Event type",
            "attributes": []
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Display name",
                "value": "tak",
                "searchname": "DISPLAY_NAME"
            }]
        }]
    }, {
        "name": "Feedback form",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Feedback form",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Feedback on adherence to budget",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Feedback on adherence to budget",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Non-initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Feedback on single batches",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Feedback on single batches",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Non-initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Feedback received",
        "class": "Intermediate Event (sequence flow)",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Feedback received",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 15,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Event type",
            "attributes": [{
                "name": "Type",
                "value": "catching",
                "searchname": "TYPE_INTERMEDIATE_EVENT"
            }, {
                "name": "Message",
                "value": "tak",
                "searchname": "TRIGGER_MESSAGE"
            }]
        }, {
            "name": "Input/Output",
            "attributes": []
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Display name",
                "value": "tak",
                "searchname": "DISPLAY_NAME"
            }, {
                "name": "Visualised values",
                "value": "Name",
                "searchname": "A_VISUALIZED_VALUES_EVENT"
            }]
        }]
    }, {
        "name": "Filled feedback form",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Filled feedback form",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Non-initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Inform travelers",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Inform travelers",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 8,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "All travelers shall be informed about the noted deviance.\nIn case of negative deviation (budget per capita was not exploitet completely) no negative reaction is to be expected. In case of positive deviation (budget per capita did not suffice to cover the expenses at all) the general satisfaction level might suffer which may put those responsible for the trip in a bad light.\n\nIn case of a deviation from the budget plan the settlement process shall be triggered with the treasurer. If credit card statements and account statements have already been verified the evaluation of the travelers' satisfaction may begin. If not then these verification procedures have to be completed first.",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Send",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }, {
                "name": "To inform",
                "searchname": "TO_INFORM",
                "value": "Roadtrip participant"
            }]
        }, {
            "name": "Input/Output",
            "attributes": []
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": [{
                "name": "Assigned risks",
                "searchname": "RISK",
                "value": "Demonstration of resentment and roaring protest"
            }]
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": [{
                "name": "Referenced applications/IT system elements",
                "searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
                "value": "Email"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:03:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Waiting time",
                "value": "0:000:00:02:00",
                "searchname": "A_WAITING_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }, {
        "name": "Information on deviance",
        "class": "Message",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Information on deviance",
                "searchname": "NAME"
            }, {
                "name": "Message type",
                "value": "Non-initiating",
                "searchname": "MESSAGE_TYPE"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }]
    }, {
        "name": "Number of dubious batches in invoices",
        "class": "Performance Indicator",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Number of dubious batches in invoices",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": "06 kpi",
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "The indicator informs on the number of unclear items in all invoices after the trip.",
                "searchname": "A_DESCRIPTION"
            }]
        }, {
            "name": "Organisation",
            "attributes": [{
                "name": "Responsible person",
                "searchname": "RC_IS_APPLICATION_OWNER",
                "value": "Treasurer"
            }]
        }, {
            "name": "Details",
            "attributes": [{
                "name": "Target value",
                "value": 5,
                "searchname": "A_TARGET_VALUE"
            }, {
                "name": "Current value",
                "value": 6,
                "searchname": "A_CURRENT_VALUE"
            }, {
                "name": "Type of tolerance",
                "value": "Absolute",
                "searchname": "TYPE_OF_TOLERANCE"
            }, {
                "name": "Unit",
                "value": "[#]",
                "searchname": "UNIT"
            }, {
                "name": "Limit type",
                "value": "Less is better",
                "searchname": "LIMIT_TYPE"
            }, {
                "name": "Threshold green/yellow",
                "value": 1,
                "searchname": "THRESHOLD_GREENYELLOW"
            }, {
                "name": "Threshold yellow/red",
                "value": 3,
                "searchname": "THRESHOLD_YELLOWRED"
            }, {
                "name": "State",
                "value": "Yellow",
                "searchname": "A_STATE_KPI"
            }, {
                "name": "Value history",
                "value": [{
                    "name": "Current value",
                    "values": [6]
                }, {
                    "name": "Target value",
                    "values": [5]
                }, {
                    "name": "State",
                    "values": ["Yellow"]
                }, {
                    "name": "Date",
                    "values": ["15.01.2015 15:33"]
                }],
                "searchname": "A_VALUE_HISTORY"
            }]
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Compliance",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": [{
                "name": "Creation date",
                "value": "01.01.1970 01:00",
                "searchname": "CREATION_DATE"
            }, {
                "name": "Date of last change",
                "value": "01.01.1970 01:00",
                "searchname": "DATE_OF_LAST_CHANGE"
            }]
        }, {
            "name": "Lifecycle",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Font size",
                "value": 180,
                "searchname": "FONT_SIZE"
            }]
        }]
    }, {
        "name": "Period has expired",
        "class": "Intermediate Event (sequence flow)",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Period has expired",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 16,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Event type",
            "attributes": [{
                "name": "Type",
                "value": "catching",
                "searchname": "TYPE_INTERMEDIATE_EVENT"
            }, {
                "name": "Timer",
                "value": "tak",
                "searchname": "TRIGGER_TIMER"
            }]
        }, {
            "name": "Input/Output",
            "attributes": []
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Display name",
                "value": "tak",
                "searchname": "DISPLAY_NAME"
            }, {
                "name": "Visualised values",
                "value": "Name",
                "searchname": "A_VISUALIZED_VALUES_EVENT"
            }]
        }]
    }, {
        "name": "Request feedback electronically",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Request feedback electronically",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 13,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "An email shall be sent to all travelers containing the feedback form. It shall be polite but not too presumptuous. The email should mention a deadline for returning the filled feedback form in order to assure timely retrieval and evaluation of the feedback.",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Send",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }, {
                "name": "To inform",
                "searchname": "TO_INFORM",
                "value": "Roadtrip participant"
            }]
        }, {
            "name": "Input/Output",
            "attributes": [{
                "name": "Data input",
                "searchname": "RC_REFERENCED_INPUT_DATA_OPTIONAL_M",
                "value": "•Feedback questionnaire 1.00\n•Feedback questionnaire 1.02"
            }]
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": []
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": [{
                "name": "Referenced applications/IT system elements",
                "searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
                "value": "•Email\n•Social network platform"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:04:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Waiting time",
                "value": "0:000:00:01:00",
                "searchname": "A_WAITING_TIME"
            }, {
                "name": "Resting time",
                "value": "0:000:00:00:05",
                "searchname": "A_RESTING_TIME"
            }, {
                "name": "Transport time",
                "value": "0:000:00:00:03",
                "searchname": "A_TRANSPORT_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }, {
        "name": "Select mode for traveler satisfaction query",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Select mode for traveler satisfaction query",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 10,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "All travelers' satisfaction with the road trip shall be assessed. There are numerous possibilities to do so:\na) in expectation of mostly positive feedback on the trip organisation: invite all travelers to a nice and jovial dinner in order to find out how the land lies\nb) in cases of reasonable suspicion that some if not all of the travelers might react agressively when being confronted with said trip again: after a considerable cool down phase a conciliating email shall be sent to all those aggrieved; it is highly recommended to watch one's back while being in public spaces.\nIn both cases autonomous inquiry using an evaluable feedback form might prove useful.",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Manual",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }]
        }, {
            "name": "Input/Output",
            "attributes": []
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": [{
                "name": "Assigned risks",
                "searchname": "RISK",
                "value": "Misinterpretation"
            }]
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": []
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:06:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Waiting time",
                "value": "0:000:00:01:30",
                "searchname": "A_WAITING_TIME"
            }, {
                "name": "Resting time",
                "value": "0:000:00:01:00",
                "searchname": "A_RESTING_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }, {
        "name": "Settlement successful?",
        "class": "Exclusive Gateway",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Settlement successful?",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 7,
                "searchname": "A_ORDER"
            }]
        }, {
            "name": "Object properties",
            "attributes": [{
                "name": "Type",
                "value": "Data-based",
                "searchname": "TYPE_EXCLUSIVE_GATEWAY"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (name)",
                "value": "below",
                "searchname": "REPRESENTATION_NAME_GATEWAY"
            }]
        }]
    }, {
        "name": "Traveler",
        "class": "Pool",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Traveler",
                "searchname": "NAME"
            }, {
                "name": "Black-box pool",
                "value": "tak",
                "searchname": "A_BLACK_BOX_POOL"
            }, {
                "name": "Rotate text by 90 degrees",
                "value": "nie",
                "searchname": "A_ROTATE_BLACKPOOL_TEXT"
            }]
        }, {
            "name": "Process properties",
            "attributes": []
        }, {
            "name": "Partner properties",
            "attributes": [{
                "name": "Referenced partner (role)",
                "searchname": "RC_REFERENCED_PARTNER_ROLE",
                "value": "Roadtrip participant"
            }, {
                "name": "Minimum",
                "value": 0,
                "searchname": "MULTIPLICITY_MIN"
            }, {
                "name": "Maximum",
                "value": 10,
                "searchname": "MULTIPLICITY_MAX"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Visualised values",
                "value": "Referenced partner (Role)",
                "searchname": "VISUALIZED_VALUES_POOL"
            }, {
                "name": "Colour",
                "value": 16777215,
                "searchname": "COLOUR"
            }, {
                "name": "Transparency",
                "value": "100%",
                "searchname": "A_TRANSPARENCY"
            }, {
                "name": "Display watermarks",
                "value": "nie",
                "searchname": "A_DISPLAY_WATERMARK"
            }, {
                "name": "Alignment",
                "value": "Middle",
                "searchname": "A_WATERMARK_ALIGNMENT_VERTICAL"
            }]
        }]
    }, {
        "name": "Treasurer",
        "class": "Pool",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Treasurer",
                "searchname": "NAME"
            }, {
                "name": "Black-box pool",
                "value": "tak",
                "searchname": "A_BLACK_BOX_POOL"
            }, {
                "name": "Rotate text by 90 degrees",
                "value": "nie",
                "searchname": "A_ROTATE_BLACKPOOL_TEXT"
            }]
        }, {
            "name": "Process properties",
            "attributes": []
        }, {
            "name": "Partner properties",
            "attributes": [{
                "name": "Referenced partner (role)",
                "searchname": "RC_REFERENCED_PARTNER_ROLE",
                "value": "Treasurer"
            }, {
                "name": "Minimum",
                "value": 0,
                "searchname": "MULTIPLICITY_MIN"
            }, {
                "name": "Maximum",
                "value": 1,
                "searchname": "MULTIPLICITY_MAX"
            }]
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Visualised values",
                "value": "Referenced partner (Role)",
                "searchname": "VISUALIZED_VALUES_POOL"
            }, {
                "name": "Colour",
                "value": 16777215,
                "searchname": "COLOUR"
            }, {
                "name": "Transparency",
                "value": "100%",
                "searchname": "A_TRANSPARENCY"
            }, {
                "name": "Display watermarks",
                "value": "nie",
                "searchname": "A_DISPLAY_WATERMARK"
            }, {
                "name": "Alignment",
                "value": "Middle",
                "searchname": "A_WATERMARK_ALIGNMENT_VERTICAL"
            }]
        }]
    }, {
        "name": "Verify and settle dubious batches",
        "class": "Task",
        "ochapters": [{
            "name": "General information",
            "attributes": [{
                "name": "Name",
                "value": "Verify and settle dubious batches",
                "searchname": "NAME"
            }, {
                "name": "Order",
                "value": 6,
                "searchname": "A_ORDER"
            }, {
                "name": "Description",
                "value": "All unclear or dubious amounts have to be verified and settled. It may be required to contact the institutions that have sent the corresponding invoices to clarify their origin and to insist on clarification.",
                "searchname": "A_DESCRIPTION_CS"
            }, {
                "name": "Task type",
                "value": "Manual",
                "searchname": "TYPE_TASK"
            }, {
                "name": "Classification",
                "value": "ENUMLIST",
                "searchname": "CLASSIFICATION"
            }]
        }, {
            "name": "RACI",
            "attributes": [{
                "name": "Responsible for execution",
                "searchname": "RESPONSIBLE_FOR_EXECUTION",
                "value": "Controler"
            }, {
                "name": "Consulted",
                "searchname": "COOPERATIONPARTICIPATION",
                "value": "Treasurer"
            }]
        }, {
            "name": "Input/Output",
            "attributes": []
        }, {
            "name": "Continuous improvement",
            "attributes": []
        }, {
            "name": "Risks",
            "attributes": []
        }, {
            "name": "Controls",
            "attributes": []
        }, {
            "name": "Systems/Products",
            "attributes": [{
                "name": "Referenced applications/IT system elements",
                "searchname": "RC_REFERENCED_IT_SYSTEM_ELEMENTS_CS",
                "value": "•E-Banking application\n•Revenue check credit card"
            }]
        }, {
            "name": "Object properties",
            "attributes": []
        }, {
            "name": "Standard (loop)",
            "attributes": []
        }, {
            "name": "Multi-instances (loop)",
            "attributes": []
        }, {
            "name": "Details",
            "attributes": []
        }, {
            "name": "Changes",
            "attributes": []
        }, {
            "name": "Attachments",
            "attributes": []
        }, {
            "name": "Simulation data",
            "attributes": [{
                "name": "Execution time",
                "value": "0:000:00:08:00",
                "searchname": "A_EXECUTION_TIME"
            }, {
                "name": "Resting time",
                "value": "0:000:00:00:02",
                "searchname": "A_RESTING_TIME"
            }, {
                "name": "Transport time",
                "value": "0:000:00:00:10",
                "searchname": "A_TRANSPORT_TIME"
            }]
        }, {
            "name": "Representation",
            "attributes": [{
                "name": "Representation (Name)",
                "value": "inside",
                "searchname": "REPRESENTATION_NAME_TASK"
            }, {
                "name": "Show responsible for execution",
                "value": "tak",
                "searchname": "DISPLAY_RESPONSIBLE_FOR_EXECUTION"
            }, {
                "name": "Show symbol (&quot;i&quot;) when a description is entered",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOL_IF_DESCRIPTION"
            }, {
                "name": "Show accountable for approving results",
                "value": "tak",
                "searchname": "DISPLAY_ACCOUNTABLE_FOR_APPROVING_RESULTS"
            }, {
                "name": "Show consulted",
                "value": "tak",
                "searchname": "DISPLAY_COOPERATIONPARTICIPATION"
            }, {
                "name": "Show to inform",
                "value": "tak",
                "searchname": "DISPLAY_TO_INFORM"
            }, {
                "name": "Show symbol when risks exist",
                "value": "tak",
                "searchname": "DISPLAY_SYMBOLS_IF_RISKS_OR_CONTROLS"
            }]
        }]
    }]
}
// const util = require('util');


// function toArray(obj) {
//     const result = [];
//     for (const prop in obj) {
//         const value = obj[prop];
//         if (typeof value === 'object') {
//             result.push(toArray(value)); // <- recursive call
//         } else {
//             result.push(value);
//         }
//     }
//     return result;
// }
// console.log(util.inspect(toArray(testdata), false, null));

arrayrows = [];

function getAttrsInn(obj) {
    let row = {};
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            getAttrsInn(value);
        } else if (typeof value === 'string') {
            row[prop] = value;
        }
    }
    if (Object.entries(row).length !== 0 && row.constructor === Object) {
        arrayrows.push(row);
    }
}

getAttrsInn(testdata)
// console.log(arrayrows)

   var groupedobjects = groupBy(testdata.objects, 'class');
//  console.log(groupedobjects)
//  console.log(Object.keys(groupedobjects))
//  console.log(util.inspect(groupedobjects, false, null));
// console.log(testdata)

function getAttrsInn3(obj) {
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            getAttrsInn3(value);
        } else if (typeof value === 'string') {
            row[prop] = value;
        }
    }
}

let groupedfinalobects=[];

function customizer(objValue, srcValue) {
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
    else if (typeof objValue === 'string')
         {
           if (!objValue.includes(srcValue))
          {
            return objValue.concat(String.fromCharCode(7) + srcValue);
          }
  }
}




Object.keys(groupedobjects).forEach(element => {


if (groupedobjects[element].length>1)
{
     let mainobj = groupedobjects[element][0]
     groupedobjects[element].forEach(element => {
        mergeWith(mainobj, element, customizer);
     });
     groupedfinalobects.push(mainobj)

}
else{
    groupedfinalobects.push(groupedobjects[element])
}
});
// console.log(util.inspect(groupedfinalobects, false, null));




var arrayrows = [];
function getAttrsInn2 (obj)
{
    let row = {};
  for (const prop in obj)
  {
    const value = obj[prop];
    if (typeof value === 'object')
    {
      getAttrsInn2(value);
    }
    else if (typeof value === 'string' || typeof value === 'number' )
    {
        // console.log("jeststringiem   " +prop + "   " +value );
        row[prop]=value;

    }
    if(Object.entries(row).length !== 0 && row.constructor === Object && !arrayrows.includes(row))
    {arrayrows.push(row);}
  }

}
getAttrsInn2(testdata);
console.log(arrayrows)
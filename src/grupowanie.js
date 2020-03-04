var groupBy = require('lodash.groupby');
var mergeWith = require('lodash.mergewith');
var isArray = require('lodash.isarray');
export function grupowanie(preparedData) {
    var groupedobjects = groupBy(preparedData, 'class');
    let groupedfinalobects = [];
    function customizer(objValue, srcValue) {
        if (isArray(objValue)) {
            return objValue.concat(srcValue);
        }
        if (typeof objValue === 'string') {
            if (!objValue.includes(srcValue)) {
                return objValue + String.fromCharCode(7) + srcValue;
            }
        } else if (typeof objValue === 'number')
        {
            return "" + objValue + String.fromCharCode(7) + srcValue;
        }
    }
    Object.keys(groupedobjects).forEach(element => {
        let mainobj = groupedobjects[element][0]
        groupedobjects[element].forEach(element => {
            mergeWith(mainobj, element, customizer);
        });
        groupedfinalobects.push(mainobj)
    });
    groupedfinalobects.forEach(element => {
        element.ochapters=  groupBy(element.ochapters, 'name');
    });
    groupedfinalobects.forEach(element => {
let groupedfinalobects2 = [];
         Object.keys(element.ochapters).forEach(element2 => {
  let mainobj2 = element.ochapters[element2][0]
  element.ochapters[element2].forEach(element3 => {
      mergeWith(mainobj2, element3, customizer);
  });
var groupedobjects3 = groupBy(mainobj2.attributes, 'name');
  let groupedfinalobects3=[];
  Object.keys(groupedobjects3).forEach(element4 => {
    let mainobj3 = groupedobjects3[element4][0]
    groupedobjects3[element4].forEach(element5 => {
        mergeWith(mainobj3, element5, customizer);
    });
    groupedfinalobects3.push(mainobj3)
});
mainobj2.attributes=groupedfinalobects3;
  groupedfinalobects2.push(mainobj2)
     });
     element.ochapters=groupedfinalobects2;
});
    return groupedfinalobects;
}
export function getName(label) {
    if (label === 'searchname' )
    {
      return "GLOBAL VALUE";
    }
    else if (label === 'start' )
    {
      return "Start report template";
    }
    else {
      return label;
    }
  }
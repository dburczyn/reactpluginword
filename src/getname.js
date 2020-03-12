export function getName(label) {
    if (label === 'searchname' )
    {
      return "GLOBAL VALUE";
    }
    else if (label === 'start' )
    {
      return "Start report template";
    }
    else if (label === 'name' )
    {
      return "Insert name";
    }
    else if (label === 'value' )
    {
      return "Insert value";
    }
    else if (label === 'class' )
    {
      return "Insert type";
    }
    else if (label === 'images' )
    {
      return "Insert model image(s)";
    }
    else if (label === 'objects' )
    {
      return "Start objects";
    }
    else if (label === 'ochapters' )
    {
      return "Object chapters";
    }
    else {
      return label;
    }
  }
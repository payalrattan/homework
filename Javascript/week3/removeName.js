  const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  console.log("Before removing"+":)"+names);
  const nameToremove = "Ahmad";
  const newNames = [];
  for(let name of names)
  {
    if(name!== nameToremove)
    {
      newNames.push(name);
    }
  }
  console.log("After removing"+" "+nameToremove+":)"+newNames);
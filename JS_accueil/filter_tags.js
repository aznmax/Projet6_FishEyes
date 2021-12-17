var filter = {
    filtre: "#Portrait",
    filtre: "#Art",
    filtre: "Fashion",
    filtre: "Architecture",
    filtre: "Travel",
    filtre: "Sport",
    filtre: "Animals",
    filtre: "Events",
  };
  var users = [{
      name: 'Mimi Keel',
      
    },
    {
      name: 'Ellie-Rose Wilekns',
      
    },
    {
      name: 'Nabeel Bradford',
      
    },
    {
      name: 'Rhode Dubois',
     
    },
    {
      name: 'Marcel Nikolic',
      
    }
  ];
  
  
console.log(users);
console.log(filter);

users= users.filter(function(item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });


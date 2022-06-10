
var name = 'Ariosvaldo';
for( var i = 0, len= name.length; i< len; i++){
  console.log(name.charAt(i)+ ' é a '+(i + 1)+'ª letra do meu nome.');
}

var fullName = 'Ariosvaldo-de-Azevedo-Neto';
var newFullName= fullName.split('-').map(function(name){return name[0].toUpperCase() + name.slice(1);}).join(' ');
console.log(fullName);
console.log(newFullName);

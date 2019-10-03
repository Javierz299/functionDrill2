'use strict';

function jediName(firstName,lastName){
  console.log(`${lastName.slice(0,3)}${firstName.slice(0,2)}`);
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

jediName('Beyonce','Knowles');

function beyond(num){
  // have no idea what a finite number is
  // i am more confused now after googling it..

  if(num < 0 || num > 0){
    console.log('And beyond');
  } else if( num === 0 && num > 0){
    console.log('To infinity');
  } else if( num === 0 && num < 0){
    console.log('To Negative ifinity');
  } else if(num === 0){
    console.log('Staying home');
  }
}
beyond();

function decode(encode){
  const decoder = {
    a:2,
    b:3,
    c:4,
    d:5,
    space: '',
  };
  const cracked = [];

  let words = encode.split(' ');
  //console.log(words);


  for(let i = 0; i < words.length; i++){
    for(let prop in decoder){
    //console.log(prop);
    //console.log(words[i].slice(0,1));
      if(words[i].slice(0,1) === prop){
        //console.log('found a match');
        cracked.push(words[i][decoder[prop] - 1]);
        //figure out how to add space with out multiple spaces due to loop
        //still working on this
      } if(words.slice(0,1) !== prop){
        //cracked.push(words[decoder['space']]);
      }
    }
  }

  console.log(cracked.join(''));
  return cracked.join('');
}
let codedMessage = 'craft block argon meter bells brown croon droop';
decode(codedMessage);

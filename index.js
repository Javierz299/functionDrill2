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



function leapYear(month,leapYear){
  let validMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
 
  
  //if(leapYear % 4 === 0 && leapYear % 100 !== 0 || leapYear % 400 === 0)

  let mm = month;
  var numDays;
  try {
    switch(mm){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      numDays = 31;
      console.log(`${month} has ${numDays} days`);
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      numDays = 30;
      console.log(`${month} has ${numDays} days`);
      break;
    case 'February':
      if(leapYear % 4 === 0 ? leapYear % 100 === 0 : leapYear % 400 === 0){
        numDays = 29;
        console.log(`${month} has ${numDays} days`);
      } else {
        numDays = 28;
        console.log(`${month} has ${numDays} days`);
      }
      break;
    default:
      if(!validMonths.includes(mm)){
        throw '';
      }
      //console.log('Must provide a valid');

    }
  }
  catch(e){
    console.error('must provied a valid month!');
  }

  //console.log(month,leapYear);
}


leapYear('April',2000);



function letsRock(playerNum){
  if(playerNum === 1){
    console.log('rock');
  } else if (playerNum === 2){
    console.log('paper');
  } else if(playerNum === 3){
    console.log('scissors');
  } else {
    console.log('not a valid choice');
  }

  const randomNum = Math.floor(Math.random() * 3) + 1;
  const computer = randomNum;
  if(computer === 1){
    console.log('rock');
  } else if(computer === 2){
    console.log('paper');
  } else if( computer === 3){
    console.log('scissors');
  }
 
 
  
}

letsRock(3);
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
  

}
// shout out to willie nelson

// acquire an image of willie nelson

// create the chacterer, willie nelson

// give willie properties and methods to move about the page

// fast facts - when consumer opens willie nelson wiki page, willie directs them to area on page

// 
// alert('chrome extension is working Ken the WIZARD');
// select the document element for the wiki page
const content = document.getElementById('bodyContent');
// console.log(content);
// const contentParent = content.parent();
const willie = new Head(content);
console.log(willie);
// console.log(willie);

/*
    // if leftPosition or topPosition is less than 0 or greater than 650
    if (leftPosition < 0 || leftPosition >  || topPosition < 0 || topPosition > ) {
        // if it is, end the game
        alert('');
        return;
      }
class Willie {
  constructor (el) {
    // creates turd img
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'turd');
    this.node.setAttribute('src', 'src/assets/poop.jpg');
    el.appendChild(node);
    
    //cfdf  

  
  }


}
*/

    // const body = document.querySelector('body'); ///<<<
    // const = document.querySelector('#board'); ///<<<
    
    //const head = new Head(board);
    //const apple = new Apple(board);
document.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft') {
        // console.log('clicked left')
        willie.currentDirection = 'left';
      }
      if (e.code === 'ArrowRight') {
        // console.log('clicked right')
        willie.currentDirection = 'right';
      }
      if (e.code === 'ArrowUp') {
        // console.log('clicked up')
        willie.currentDirection = 'up';
      }
      if (e.code === 'ArrowDown') {
        // console.log('clicked down')
        willie.currentDirection = 'down';
      }

      if (e.code === 'KeyG') {
        willie.SPEED = 10000;
        alert('Did you know that I was raised during the Great Depression and by my grandparents');
      }
      if (e.code === 'KeyA') {
        willie.SPEED = 10000;
        alert('Did you know that I served in the Air Force?');
      }
      if (e.code === 'KeyS') {
        willie.SPEED = 10000;
        document.getElementById("Activism").scrollIntoView();
        setTimeout(console.log('hello'), 1000);
        alert('Did you know, along with Neil Young and John Mellencamp, I set up Farm Aid in 1985 to assist and increase awareness of the importance of family farms?');
      }
      if (e.code === 'KeyR') {
        clearTimeout(willie.timeoutID);
        willie.SPEED = 50;
        willie.move();
      }
      // if (e.code === 'KeyP') {
      //   willie.SPEED = 10000;
      // }
      // else if (e.code === 'KeyR') {
      //   willie.SPEED = 50;
      // }
    });

    //a key press that would disable the mobility of the user --> clearTimeout(timeoutID)
    //placing movement else if statement 
    //the original if is the pause feature

    //with key press increment the number of pixels moved with each key press




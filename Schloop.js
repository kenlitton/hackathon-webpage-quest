class Head {
    constructor(el) {
      // select the body content
      //const theDifficultDookie = https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5810eaec37c581dc5e1d795c%2F1587659932726-QHN9GNRC0G3T50SJ5406%2Fke17ZwdGBToddI8pDm48kJQyhJNCPFaF3z6oMQ5KwFtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxn9MscIJUH4esFEGk4cC-kwDD88aZZkucN8hiwA1Ci0sD279UUnTBmZAQp9ZHRzLY%2Fwillie.jpg&imgrefurl=https%3A%2F%2Fwilliesreserve.com%2Fmedia&tbnid=vWNj0LW8XIs2hM&vet=12ahUKEwjgsqHux6LwAhVLAjQIHWYHBaAQMyhkegUIARCsAQ..i&docid=RLGaaqlXyFu-1M&w=600&h=337&q=jpeg%20willie%20nelson%20small&client=safari&ved=2ahUKEwjgsqHux6LwAhVLAjQIHWYHBaAQMyhkegUIARCsAQ
      // const content = document.getElementById('bodyContent');
      // el.prepend('https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5810eaec37c581dc5e1d795c%2F1587659932726-QHN9GNRC0G3T50SJ5406%2Fke17ZwdGBToddI8pDm48kJQyhJNCPFaF3z6oMQ5KwFtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxn9MscIJUH4esFEGk4cC-kwDD88aZZkucN8hiwA1Ci0sD279UUnTBmZAQp9ZHRzLY%2Fwillie.jpg&imgrefurl=https%3A%2F%2Fwilliesreserve.com%2Fmedia&tbnid=vWNj0LW8XIs2hM&vet=12ahUKEwjgsqHux6LwAhVLAjQIHWYHBaAQMyhkegUIARCsAQ..i&docid=RLGaaqlXyFu-1M&w=600&h=337&q=jpeg%20willie%20nelson%20small&client=safari&ved=2ahUKEwjgsqHux6LwAhVLAjQIHWYHBaAQMyhkegUIARCsAQ');
      this.node = document.createElement('img'); //<<<WHAT THE BUTT
      this.node.setAttribute('id', 'head'); // <<  connecting to the CSS id head, also to connecct movement to img
      this.node.setAttribute('src', 'https://www.everi.com/wp-content/uploads/2021/01/WillieNelson_Thumbnail_275X275.png'); //<<WHAT THE BUTT
      el.appendChild(this.node);
  
      this.currentDirection = 'right';
      this.SPEED = 50;
  
      this.node.style.top = '0px';
      this.node.style.left = '0px';

      this.node.style.width = "100px";
      this.node.style.height = "100px";
      this.node.style.position = "absolute";
  
      // const score = document.getElementById('score');
      // score.innerHTML =  `${this.score}`;
  
      // body property
      // this.bodySegment = [];
      // this.headPosition =[];    
  
      //binds this move method to the contructed head
      setTimeout(this.move.bind(this), this.SPEED);
  
    }



//https://www.everi.com/wp-content/uploads/2021/01/WillieNelson_Thumbnail_275X275.png

    move() {
        const head = this.node;
        // Do we need to change this to head.currentDirection
        const direction = this.currentDirection;
    
        // changes the head's position
        let topPosition = Number(head.style.top.replace('px', ''));
        let leftPosition = Number(head.style.left.replace('px', ''));

        // define logic to end game if element runs into border 
    
       // NAKE BODY MOVEMENT
        // Body.moveBody(`${(leftPosition)}px`,`${(topPosition)}px`);
       ///<<<< WUT is this doong heer
      /////////  NORMAL SNAKE HEAD MOVEMENT   /////////////
      // console.log("this is Body.moveBody in the headjs file", Body);
      // Movement for the snake HEAD
      if (direction === 'right') {
        head.style.left = `${(leftPosition += 1)}px`;
        // console.log('pressed right');
      }
      if (direction === 'left') {
        head.style.left = `${(leftPosition -= 1)}px`;
        // console.log('pressed left');

      }
      if (direction === 'up') {
        head.style.top = `${(topPosition -= 1)}px`;
        // console.log('pressed up');
      }
      if (direction === 'down') {
        head.style.top = `${(topPosition += 1)}px`;
        // console.log('pressed down');
      }
      //move the body by creating a new node where head just was and popping the node of the tail
  
      setTimeout(this.move.bind(this), this.SPEED);
    }
  }
    // class WillieNelson {
    //   constructor(el) {
    //     this.node = document.createElement('img');
    //     this.node.setAttribute('id', 'apple');
    //     this.node.setAttribute('src', 'hackathon/assets/{_nameOfImage}');

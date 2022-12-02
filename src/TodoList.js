import React from 'react';

export default function TodoList(){

    class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
mycar.present();
      
    return(
        
        <h1>Jonathon and James here we go, need to get Mongo running</h1>
    )
}
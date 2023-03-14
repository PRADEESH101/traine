// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById('root'));;

// function sayhello(){
//     for(let i =0; i<5;i++){
//         console.log(i);
//     }
// }

// sayhello();

// const person = {
//     name: 'pradeesh',
//     walk(){
//         console.log(this);
//     }

// };

// person.walk();

// const walk = person.walk.bind(person);
// walk();
// const targetMember = 'name';
// person[targetMember.value] = 'john';

// const squre = function(number){
//     return number * number;
// }
// const square = number => number * number;
// console.log(square(5));

// const jobs =[
//     {id:1, isActive: true},
//     {id:2, isActive: true},
//     {id:3, isActive: false},

// ];

// const activeJobs = jobs.filter(function(job) { return job.isActive;});

// const person ={
//     talk() {
//         var self =this;
//         setTimeout(() => {
//             console.log("self",self);
//         },1000);
        
//     }
// };

// person.talk();


// const colors = ['red','green','blue'];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items)

// const address ={
//     street:'',
//     city:'',
//     country:''
// };

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const{ street: st, city, country} = address;

// class Person{
//     constructor(name){
//         this.name = name;
//     }
// walk() {
//     console.log("walk");
// }
// }

// const person = new Person('Natrajasivam');
// console.log(person);

// const first ={name: 'pradeesh'};
// const second = { job:'Devloper'};

// const combined = {...first,...second,location:'Madurai'};
// console.log(combined);

// class Teacher extends Person{
//     constructor(name,degree){
//         super(name);
//         this.degree = degree;
//     }
    
//     teach(){
//         console.log('teach');
//     }
// }
// const teacher = new Teacher("Nottu","BE");
// console.log(teacher);






import React from 'react'

function Car(props) {
    return <li>I am a { props.brand }</li>;
}
 


export default function C20241111a(props){

    //array.map(callback function);

    const array1 = [1, 4, 9, 16];
    // Pass a function to map
    const map1 = array1.map((x) => x * 2);
    console.log("test : " + map1);

    //return에 반영해보기!
    //const cars = ['Ford', 'BMW', 'Audi'];
    //키 값 주고 사용해보기
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];

    // fetch('https://672cb0b81600dda5a9f980b5.mockapi.io/api/v1/oss_hw4')
    // .then((response) => response.json())
    // .then((result)=>alert(result))



    return (
        <>
        <div>C20241114a : {props.name}</div>
        <ul>
            {/* {cars.map((car) => <Car brand={car} />)} */}
            {/* {array1.map((each) => <div>{each}</div>)}
            {array1.map((each) => <input value={each}/>)} */}
            {cars.map((each) => <Car key={each.id} brand={each.brand} />)}
        </ul>
        </>
    )
}


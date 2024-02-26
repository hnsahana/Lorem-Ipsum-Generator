// import the api key here

import {MY_API_KEY} from './config.js';

//html elements

const output = document.getElementById('output');
const generateBtn = document.getElementById('generate-btn');
const copybtn = document.getElementById('copy-btn');

// api url
const url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";
const options = {
    method : 'GET',
    headers: { 
        'X-Api-Key': MY_API_KEY
    }
}

async function fetchData(){
    const response = await fetch(url,options);
    const data = await response.json();
    // console.log(data.text);
    output.innerText = data.text;
}

//generate button
generateBtn.addEventListener('click', function(){
    fetchData();
})

//copy button
copybtn.addEventListener('click', function(){
    navigator.clipboard.writeText(output.innerText);
    alert("Text copied to clipboard");
})

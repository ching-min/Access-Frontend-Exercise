import React, { useEffect } from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import data from './user_list.json';
import * as serviceWorker from './serviceWorker';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// load data  from GitHub api
const { Octokit } = require("@octokit/rest"); //require
export default function Ap() {
  const octokit = new Octokit();

  useEffect(() => {getGithubUsers();}); // store data // each render

  async function getGithubUsers() { //get user
    await octokit.request("GET /users");
  }

}

// show data on browser
function print_data(){    
  var output='"';
  output+="<table id=t1 border=1 width=80% align=center>"; //table
  output+="<thead><td align=center>Number of items</td><td align=center>Login</td><td align=center>avatar_url</td><td align=center>site_admin</td></thead>"
    for(var i=0;i<data.length;i++){
      
        output+="<tr>";
        output+="<td align=center>"+data[i]["id"]+"</td>";
        output+="<td align=center>"+data[i]["login"]+"</td>";
        output+="<td align=center>"+"<a href="+data[i]["avatar_url"]+">"+data[i]["avatar_url"]+"</a>"+"</td>";
        output+="<td align=center>"+data[i]["site_admin"]+"</td>";
        output+="</tr>";
    }
    output+="</table>";
    return output;
}
window.document.getElementById("root").innerHTML= print_data(); // show on browser 
//window.document.getElementById("root").innerHTML= output;

//ReactDOM.render(<listing />, document.getElementById('root'));
/*var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(element, document.getElementById('root'));*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

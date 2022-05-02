
let options, data1, data2;
async function getDataToCompare(u1) {
  if(u1==0){
  username1 = document.getElementById('username1').value;
  username2 = document.getElementById('username2').value;
}

let usernames={username1, username2};

console.log(usernames);
console.log(JSON.stringify(usernames));
        options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usernames)
        };

const response1 = await fetch('/compare1', options);
data1 = await response1.json();

const response2 = await fetch('/compare2', options);
data2 = await response2.json();
output();
    };

function output() {


 data1=data1[0];
 data2=data2[0];

var profile1=document.createElement("div");
profile1.setAttribute("class", "profile1");
var img1 =document.createElement("img");
img1.setAttribute("src", data1.profile);
profile1.appendChild(img1);
var p_1 =document.createElement("p");
p_1.setAttribute("class", "p_profile");
p_1.appendChild(document.createTextNode(`Username: ${data1.log}`));
profile1.appendChild(p_1);
var p_1 =document.createElement("p");
p_1.setAttribute("class", "p_profile");
p_1.appendChild(document.createTextNode(`Name: ${data1.name}`));
profile1.appendChild(p_1);
var p_1 =document.createElement("p");
p_1.setAttribute("class", "p_profile");
p_1.appendChild(document.createTextNode(`Bio: ${data1.bio}`));
profile1.appendChild(p_1);
var p_1 =document.createElement("p");
p_1.setAttribute("class", "p_profile");
p_1.appendChild(document.createTextNode(`Followers: ${data1.followers}`));
profile1.appendChild(p_1);
var p_1 =document.createElement("p");
p_1.setAttribute("class", "p_profile");
p_1.appendChild(document.createTextNode(`Following: ${data1.following}`));
profile1.appendChild(p_1);
var p_1 =document.createElement("p");
p_1.setAttribute("class", "p_profile");
p_1.appendChild(document.createTextNode(`Number of public Repos: ${data1.repos}`));
profile1.appendChild(p_1);


var profile2=document.createElement("div");
profile2.setAttribute("class", "profile2");
var img2 =document.createElement("img");
img2.setAttribute("src", data2.profile);
profile2.appendChild(img2);
var p_2 =document.createElement("p");
p_2.setAttribute("class", "p_profile");
p_2.appendChild(document.createTextNode(`Username: ${data2.log}`));
profile2.appendChild(p_2);
var p_2 =document.createElement("p");
p_2.setAttribute("class", "p_profile");
p_2.appendChild(document.createTextNode(`Name: ${data2.name}`));
profile2.appendChild(p_2);
var p_2 =document.createElement("p");
p_2.setAttribute("class", "p_profile");
p_2.appendChild(document.createTextNode(`Bio: ${data2.bio}`));
profile2.appendChild(p_2);
var p_2 =document.createElement("p");
p_2.setAttribute("class", "p_profile");
p_2.appendChild(document.createTextNode(`Followers: ${data2.followers}`));
profile2.appendChild(p_2);
var p_2 =document.createElement("p");
p_2.setAttribute("class", "p_profile");
p_2.appendChild(document.createTextNode(`Following: ${data2.following}`));
profile2.appendChild(p_2);
var p_2 =document.createElement("p");
p_2.setAttribute("class", "p_profile");
p_2.appendChild(document.createTextNode(`Number of public Repos: ${data2.repos}`));
profile2.appendChild(p_2);

var repos_name_f=document.createElement("div");
repos_name_f.setAttribute("class", "repos_name1");

let j=1
   for(i=0; i<data1.repos_length; i++){
     let repo="repo"+j;
     j++;
     var p1 =document.createElement("p");
     p1.setAttribute("class", "p_repos");
     p1.appendChild(document.createTextNode(`${repo}: ${data1[`repo[${i}]`]}`));
     repos_name_f.appendChild(p1);

   }
j=1
   var repos_name_s=document.createElement("div")
   repos_name_s.setAttribute("class", "repos_name2");
        for(i=0; i<data2.repos_length; i++){
          let repo="repo"+j;
          j++;
        var p2 =document.createElement("p");
        p2.setAttribute("class", "p_repos");
        p2.appendChild(document.createTextNode(`${repo}: ${data2[`repo[${i}]`]}`));
        repos_name_s.appendChild(p2);
        }

var final_table=document.createElement("table");
final_table.setAttribute("class", "final_tab");
var row1=document.createElement("tr");
row1.setAttribute("class", "row_1");
var td1=document.createElement("td");
td1.setAttribute("class", "td_1");
td1.appendChild(profile1);
var td2=document.createElement("td");
td2.setAttribute("class", "td_2");
td2.appendChild(profile2);
row1.appendChild(td1);
row1.appendChild(td2);
var row2=document.createElement("tr");
row2.setAttribute("class", "row_2");
var td21=document.createElement("td");
td21.appendChild(repos_name_f);
td21.setAttribute("class", "td_1");
var td22=document.createElement("td");
td22.appendChild(repos_name_s);
td22.setAttribute("class", "td_2");
row2.appendChild(td21);
row2.appendChild(td22);
final_table.appendChild(row1);
final_table.appendChild(row2);

document.body.appendChild(final_table);

document.getElementById("compare_title").innerHTML = "Comparison Results";


};

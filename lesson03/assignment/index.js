<!--Create object with data from JSON file-->

$(document).ready(function(){
var people=[
  {name: "Paolo Maldini", jobTile: "Front End Developer", company: "Web Weaver", experience: "3 years", school: "Univeristy of Washington", major: "Marketing", email: "paolo@gmail.com", linkedInUrl: "paolo@linkedinprofile.com", codeLanguages: "HTML,CSS,JavaScript,Node,Express"},
  {name: "Barbara Boansea", jobTitle: "Software Engineer", company: "Excellence in the Cloud", experience: "12 years", school: "University of Southern California", major: "Computer Science", email: "barbara@example.com", linkedInUrl: "barbara.linkedinprofile.com", codeLanguages: "HTML,JavaScript,C,Go"},
  {name: "Javier Hernandez", jobTitle: "User Experience Engineer", company: "Web Sites and More", experience: "5 years", school: "Seattle University", major: "Performing Arts", email: "javier@example.com", linkedInUrl: "javier.linkedinprofile.com", codeLanguages: "HTML,CSS"},
  {name: "Maribel Dominguez", jobTitle: "Front End Engineer", company: "Bits and Bytes", experience: "6 years", school: "University of Washington", major: "Mechanical Engineering", email: "maribel@example.com", linkedInUrl: "maribel.linkedinprofile.com", codeLanguages: "HTML,CSS,JavaScript,React,Vue,Redux"},
];

console.log(people);

<!--Map through elements of object above-->

let dataHTML=data.map(function(data){
    return data=
      <main class="main">
            <div class="identity">
              <img src="img/headshot.jpg" class="headshot" alt="brown and white dog in black bowtie">
              <div class="name-position">
                <h1 class="photo-title_name">${people.name}</h1>
                <h2 class="photo-title_title">${people.jobTitle}</h2>
              </div>
            </div>
            <div class="info">
            <ul>
              <li class="spanstyle">Company: ${people.company}</li>
              <li class="spanstyle">Experience: ${people.experience}</li>
              <li class="spanstyle">School: ${people.school}</li>
              <li class="spanstyle">Major: ${people.major}</li>
              <li><img src="img/linkedin.svg" alt="linkedIn logo"> ${people.linkedInUrl}</li>
              <li class="spanstyle">Code languages:> ${people.codeLanguages}</li>
              </ul>
            });
              </div>
          </main>
      </body>
  </html>

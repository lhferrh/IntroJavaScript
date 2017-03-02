/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*work contains an array of jobs. Each object in the jobs array should
contain an employer, title, location, dates worked and description strings*/

var work = {
    "jobs":[
            {"employer":"Owner and manager of a cocktail bar" ,
            "title":"PrizeZero80","location":"Murcia",
            "dates":"2013-2014",
            "description":"Desing, creation of a cocktail bar in \" Plaza de las flores \" ",
            "url":'https://www.facebook.com/prive.murcia?fref=ts'
            }
    ]


};

/*projects contains an array of projects. Each object in the projects array
 should contain title, dates and description strings, and an images array
 with URL strings for project images.*/

 var project = {
    "projects":[
                {
                "title":"Marriot hotel",
                "dates":"2010-2011",
                "description":"Desing and contruction of the first Marriot hotel in Bolivia",
                "images":[ "http://images.hgmsites.net/med/university-of-michigans-mobility-transformation-facility-to-test-self-driving-cars-ann-arbor-mi_100468972_m.jpg","http://www.where2nowmag.com/wp-content/uploads/2009/09/chicago-mock-city.png"]
                 }
    ]
 };



/*bio contains name, role, welcomeMessage, and biopic strings, contacts object
and skills array of skill strings. The contacts object should contain a mobile
number, email address, github username, twitter handle and location. The twitter
property is optional.*/

var bio = {
    "name" : "Ruben R",
    "role" : "Computer Science student",
    "welcomeMessage" : "Welcome home",
    "biopic" : "Enviromental impact of big contructions",
    "contacts" : {
             "mobile" :"",
             "email" :"lhferrh@gmail.com",
             "github" :"lhferrh",
             "twitter" : "",
             "location": "Warsaw"
             },
    "skills": ["Hardworker","Good in dificult task", "Quick learner","Good communicative"],
    "image": "https://thumbs.dreamstime.com/x/3d-email-symbol-orange-16906583.jpg"
}

/*education contains an array of schools. Each object in the schools array contains
name, location, degree dates and url strings, and amajors array of major strings. */

var education = {
    "schools": [{
        "name": "UGR",
        "location": "Granada",
        "degree": "Computer Science",
        "url": "http://www.ugr.es",
        "dates":"2014-Currently"
    },
    {
        "name": "Politechnic Warsaw University",
        "location": "Warsaw",
        "degree": "Computer Science Erasmus programme",
        "url": "http://www.pw.edu.pl",
        "dates":"2016-2017"
    },
    {
       "name": "UM",
        "location": "Murcia",
        "degree": "Managment",
        "url": "http://www.um.es",
        "dates": "2010-2014"
    }],
    "onlinecourses": [{
        "title": "Introduction to HTML and CSS",
        "school": "udacity courses",
        "dates": "02/2017",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, {
        "title": "Introduction to JavaScript",
        "school": "udacity courses",
        "dates": "02/2017",
        "url": "https://classroom.udacity.com/courses/ud804"
    }]
};



 project.display = function(){
      var p =project.projects;

        for (i=0; i<p.length ;i++){
            // create the div class
            $("#projects").append(HTMLprojectStart);
            var formattedTitle= HTMLprojectTitle.replace("%data%",p[i].title);
            var formattedDates= HTMLprojectDates.replace("%data%",p[i].dates);
            var formattedDescription= HTMLprojectDescription.replace("%data%",p[i].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            var j = 0;
            var imag = p[i].images;
            for(j=0; j< imag.length; j++){
               var formattedImage= HTMLprojectImage.replace("%data%",imag[j]);
               $(".project-entry:last").append(formattedImage);
            }

        }
}

education.display = function(){
      var schools =education.schools;

        for (i=0; i<schools.length ;i++){
            // create the div class
            $("#education").append(HTMLschoolStart);
            var formattedName= HTMLschoolName.replace("%data%",schools[i].name);
            var formattedName= formattedName.replace("#",schools[i].url);
            var formattedLocation= HTMLschoolLocation.replace("%data%",schools[i].location);
            var formattedDegree= HTMLschoolDegree.replace("%data%",schools[i].degree);
            var formattedDates= HTMLschoolDates.replace("%data%",schools[i].dates);
            var formattedURL= HTMLschoolURL.replace("%data%",schools[i].url);
            var formattedURL= formattedURL.replace("#",schools[i].url);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedURL);
            $(".education-entry:last").append("<hr>");
        }
}

bio.displayContacts = function(){

    var contact = bio.contacts;
    var formattedEmail = HTMLemail.replace("%data%",contact.email);
    //var formattedMobile = HTMLmobile.replace("%data%",contact.mobile);
    //var formattedTwitter = HTMLtwitter.replace("%data%",contact.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%",contact.github);
    var formattedLocation= HTMLlocation.replace("%data%",contact.location);
    //$("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    //$("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedLocation);
    //$("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    //$("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLocation);


}

function displayPresentation(){
    var formattedHeaderRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
    //var formattedPresentation = HTMLpresentation.replace("%data%",formattedHeaderName);
    $("#header").prepend(formattedHeaderName + formattedHeaderRole);
    var formattedImg = HTMLbioPic.replace("%data%",bio.image);
    $("#header").append(formattedImg);
   // var formattedWelcome = HTMLwelcomeMsg("%data%",bio.welcomeMessage);

}
//Function to display skiils and works
function displayWork(){
  //Evalution of bio.skills and append of skills
  if(bio.skills.lenght != 0){
    $("#header").append(HTMLskillsStart);
    var i= 0;
    while(i<bio.skills.length){
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
      i++;
    }
    //Evaluation and append of jobs in work (Bucle for with iterator)
    for(job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      if ( work.jobs[job].url.length > 5){
        var formattedEmployer = formattedEmployer.replace("#",work.jobs[job].url);
      }
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formatEmployerTitle =  formattedEmployer+ formattedTitle ;
      $(".work-entry:last").append(formatEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
       $(".work-entry:last").append(formattedDescription);


    }
  }
}


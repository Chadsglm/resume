var bio = {
    "name": "Cihad Saglam",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0041 76 386 58 55",
        "email": "saglam.chd@gmail.com",
        "github": "xxxxx",
        "xing": "yyyyyy",
        "location": "Zurich / Switzerland"
    },
    "welcomeMessage": "Bla bla bla bla low bla.",
    "skills": [
        "Programming", " JS", " Robotics", " CSS", " HTML", " SQL"
    ],
    "bioPic": "images/Cihad_Saglam.JPG"
};

var work = {
    "jobs": [
        {"employer": "interligent works dogan",
         "title": "Web Developer",
         "dates": "2014-2016",
         "location": "Sakarya / Turkey",
         "description": "jahjahjsoskkskshjkjjkl"
        },
        {"employer": "Yusuph Balasagyn Kyrgyz Nationalty University",
         "title": "Bacheler",
         "dates": "2005-2010",
         "location": "Bishkek / Kyrgystan",
         "description": "apaiudbdöaoauzsblaiaaklspsksbjs..."
        }
    ]
};

var education = {
    "schools": [
        {"name": "Sakarya University",
         "degree": "Masters",
         "dates": "2014-2016",
         "location": "Sakarya / Turkey",
         "major": ["Computer Science"],
         "url": "https://www.knu.kg/"
        },
        {"name": "Yusuph Balasagyn Kyrgyz Nationalty University",
         "degree": "Bacheler",
         "dates": "2005-2010",
         "location": "Bishkek / Kyrgystan",
         "major": ["Physic"],
         "url": "https://www.knu.kg/"
        }
    ],
    "onlineCourses": [
        {"school": "Udacity",
		 "title": "Javascript Basics",
		 "completed": "October 2016",
		 "url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
		 "title": "Intro to HTML and CSS",
		 "completed": "October 2014",
		 "url": "https://www.udacity.com/course/ud304"
		},	
    ]
};

var projects = {
    "projects": [
        {"title": "Masters",
         "dates": "2014-2016",
         "description": "lahdajklshfalkjfkjfalkjahfklas",
         "images": "",
         "url":""
        },
        {"title": "Yusuph Balasagyn Kyrgyz Nationalty University",
         "dates": "2005-2010",
         "description": "ölajsdlkasjdkla",
         "images": "",
         "url":""
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLxing.replace("%data%", bio.contacts.xing));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {
	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/** 
 * International name function
 * turns name into International format
 */
//$("#main").append(internationalizeButton);
//var inName = function(_name) {
//    var splitName = _name.split(" ");
//    var firstName = splitName[0][0].toUpperCase() + splitName[0].slice(1);
//    var lastName = splitName[1].toUpperCase();
//    var internationalName = firstName + " " + lastName;
//    return internationalName;
//};

$("#mapDiv").append(googleMap);
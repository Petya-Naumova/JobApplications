function JobOffer(id, title, description, requirements, address){
	this.id = id;
	this.title = title;
	this.description = description;
	this.requirements = requirements;
	this.address = address;
}
 var  WebDeveloper = new JobOffer(1, "Web Developer", "A person with 1+ years of experience in Web development", "CSS3, HTML 5, LESS/SASS, JS", "Sofia city");
 var  RoRDeveloper = new JobOffer(2, "RoR Developer", "We are looking for developers with good skills in Ruby and Ruby on Rails to join our team.", "Ruby, Ruby on Rails", "Sofia");
 var  GameDeveloper = new JobOffer(3,"Game Developer", "GameDeveloper needed ASAP", "Action Script 3, HTML5/CSS3", "Sofia top location");


function Applicant(id, name, email, experience){
	this.id = id;
	this.name = name;
	this.email = email;
	this.experience = experience;
	this.apply = function(){
		
	}
}
var Olga = new Applicant(1, "Olga", "olga@gmail.com", "2 years");
var Petya = new Applicant(2, "Petya", "petya@gmail.com", "2 years and a half");
var Bilyana = new Applicant(3, "Bilyana", "bilyana@abv.bg", "less than a year");
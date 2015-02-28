var JobOffersContainer = [];

function JobOffer(id, title, description, requirements, address) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.requirements = requirements;
    this.address = address;
}
var WebDeveloper = new JobOffer(1, "Web Developer", "A person with 1+ years of experience in Web development", "CSS3, HTML 5, LESS/SASS, JS", "Sofia city");
var RoRDeveloper = new JobOffer(2, "RoR Developer", "We are looking for developers with good skills in Ruby and Ruby on Rails to join our team.", "Ruby, Ruby on Rails", "Sofia");
var GameDeveloper = new JobOffer(3, "Game Developer", "Game Developer needed ASAP", "Action Script 3, HTML5/CSS3", "Sofia top location");
JobOffersContainer.push(WebDeveloper, RoRDeveloper, GameDeveloper);

var ApplicantsContainer = [];

function Applicant(id, name, email, experience) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.experience = experience;
    this.apply = function() {

    }
}
var Olga = new Applicant(1, "Olga", "olga@gmail.com", "2 years");
var Petya = new Applicant(2, "Petya", "petya@gmail.com", "2 years and a half");
var Bilyana = new Applicant(3, "Bilyana", "bilyana@abv.bg", "less than a year");
ApplicantsContainer.push(Olga, Petya, Bilyana);


window.addEventListener("load", function() {
    function ConstructTableOffers() {
        var JobOffersList = document.getElementById("JobOffersList");
        for (var i = 0; i < JobOffersContainer.length; i++) {
            var newRow = JobOffersList.insertRow(-1);
            var TitleCell = newRow.insertCell(-1);
            TitleCell.innerHTML = JobOffersContainer[i].title;
            var descriptionCell = newRow.insertCell(-1);
            descriptionCell.innerHTML = JobOffersContainer[i].description;
            var requirementsCell = newRow.insertCell(-1);
            requirementsCell.innerHTML = JobOffersContainer[i].requirements;
            var addressCell = newRow.insertCell(-1);
            addressCell.innerHTML = JobOffersContainer[i].address;
            var buttonCell = newRow.insertCell(-1);
            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-info");
            button.textContent = "Apply";
            buttonCell.appendChild(button);
        }
    };

    function ConstructTableApplicants() {
        var JobApplicants = document.getElementById("JobApplicants");
        for (var i = 0; i < ApplicantsContainer.length; i++) {
            var addRow = JobApplicants.insertRow(-1);
            var nameCell = addRow.insertCell(-1);
            nameCell.innerHTML = ApplicantsContainer[i].name;
            var emailCell = addRow.insertCell(-1);
            emailCell.innerHTML = ApplicantsContainer[i].email;
            var experienceCell = addRow.insertCell(-1);
            experienceCell.innerHTML = ApplicantsContainer[i].experience;


        };
    };
    ConstructTableApplicants();
    ConstructTableOffers();
})
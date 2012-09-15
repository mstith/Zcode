var ninja = function(title){
	this.title= title;
	this.length(title.length);
};


var book1 = new ninja("Ninja Burger: Honorable Employee Handbook");
var book2 = new ninja("Mind Fist: The Asian Art of the Ninja Masters");
var book3 = new ninja("Real Ninja: Over 20 True Stories of Japan's Secret Assassins");
var book4 = new ninja("More Secrets of the Ninja: Their Training, Tools and Techniques");

console.log(book1.title);

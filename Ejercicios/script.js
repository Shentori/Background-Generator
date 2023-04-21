function movecommand() {
	var whatHappens;
	switch(direction){
	case "forward":
		whatHappens ="you encounter a monster";
		break;
	
	case "back":
		whatHappens ="you encounter a home";
		break;
	
	case "right":
		whatHappens ="you encounter a river";
		break;
	
	case "left":
		whatHappens ="you encounter a troll";
		break;

	default: 
		whatHappens = "please enter a valid option"
	}
	return whatHappens;
}

 


const player  = 'bobby';
let experience = 100;
let wizardlever = false ;

if (experience>90){
	let wizardlever = true; 
}
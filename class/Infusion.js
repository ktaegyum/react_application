export class Infusion {
	constructor(date) {
		this.date = date;
		this.fatigue = [];
		this.anxiety = [];
		this.numFatigue = 0;
		this.numAnxiety = 0;
	}
	add_fatigue(symptom_date,fatigue) {
		//Check the date of the fatique
		//to determin whether tit can be added or averaged(duplicate date exist)
		//check the differences of date to get correct index of the list
		var date_diff = symptom_date.getDate() - this.date.getDate();

		if(date_diff >= this.fatigue.list) {
			//if index is larger than current size of the list, just add 0 between then add new things
			for(i = 0; i < 2; i++) {
				fatigue.push(0);
			}
			fatigue.push(fatigue);
		}else{
			//if the index exist, take the element and make average
			fatigue[date_diff] = (fatigue[date_diff] + fatigue) / 2;
		}

	}
	add_anxiety(symptom_date,anxiety) {
		//Check the date of the fatique
		//to determin whether tit can be added or averaged(duplicate date exist)
		//check the differences of date to get correct index of the list
		var date_diff = symptom_date.getDate() - this.date.getDate();

		if(date_diff >= this.anxiety.list) {
			//if index is larger than current size of the list, just add 0 between then add new things
			for(i = 0; i < 2; i++) {
				anxiety.push(0);
			}
			anxiety.push(anxiety);
		}else{
			//if the index exist, take the element and make average
			anxiety[date_diff] = (anxiety[date_diff] + anxiety) / 2;
		}
	}
	get_numFatigue() {
		return this.numFatigue;
	}
	get_numAnxiety() {
		return this.numAnxiety;
	}
}
export function Infusion(date, days) {
	this.date = new Date(date);
	this.fatigue = [];
	this.anxiety = [];
	for(i = 0; i < days; i++) {
		this.fatigue.push(i+1);
		this.anxiety.push(i+1);
	}
	this.getInfusion = false;
	this.addFatigue = function(symptom_date, fatigue) {
		//Check the date of the fatique
		//to determin whether tit can be added or averaged(duplicate date exist)
		//check the differences of date to get correct index of the list
		var date_diff = symptom_date.getDate() - this.date.getDate();
		if(date_diff >= this.fatigue.length) {
			//if index is larger than current size of the list, just add 0 between then add new things
			for(i = 0; i < date_diff - this.fatigue.length; i++) {
				fatigue.push(-1);
			}
			fatigue.push(fatigue);
		}else if(fatigu[date_diff] == -1){
			//if the index exist, take the element and make average
			fatigue[date_diff] = fatigue;
		}else {
			fatigue[date_diff] = (fatigue[date_diff] + fatigue) / 2;
		}	
	};
	this.addAnxiety = function(symptom_date, anxiety) {
		//Check the date of the anxiety
		//to determin whether tit can be added or averaged(duplicate date exist)
		//check the differences of date to get correct index of the list
		var date_diff = symptom_date.getDate() - this.date.getDate();

		if(date_diff >= this.anxiety.length) {
			//if index is larger than current size of the list, just add 0 between then add new things
			for(i = 0; i < date_diff - this.anxiety.length; i++) {
				anxiety.push(-1);
			}
			anxiety.push(anxiety);
		}else if(fatigu[date_diff] == -1){
			//if the index exist, take the element and make average
			anxiety[date_diff] = anxiety
		}else {
			anxiety[date_diff] = (anxiety[date_diff] + anxiety) / 2;
		}		
	};
	this.getInfusionDate = function() {
		return this.date;
	};
	this.setInfusion = function() {
		this.getInfusion = true;
	};
	this.getInfusion = function() {
		return this.getInfusion;
	};
	this.getFatigue = function(index) {
		return this.fatigue[index];
	};
	this.getAnxiety = function(index) {
		return this.anxiety[index];
	};
};
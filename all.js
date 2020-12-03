function getSelectSpecies(animalsData){
	var template = `<option value="">---請選擇動物物種---</option>`
	var animalSpeciesArray = [];

	for(var i = 0; i < animalsData.length; i++){
		if(animalSpeciesArray.indexOf(animalsData[i].物種) === -1){
			template += `<option value="${animalsData[i].物種}">${animalsData[i].物種}</option>`
			animalSpeciesArray.push(animalsData[i].物種);
		}
	}
	// for(var i = 0; i < animalSpeciesArray.length; i++){
	// 	template += `<option value="${animalSpeciesArray[i]}">${animalSpeciesArray[i]}</option>`
	// }
	return template;
}

function getTotalAnimalsData(callback){
	fetch('http://gsx2json.com/api?id=1lJhPRCKvFyHVIT5PSG95-gQeBicZUfiU3gqUL4vws6k&columns=false')
	.then(function(response){
		return response.json()
	})
	.then(function(response){
		callback(response.rows);

	})
}

function getTargetSpeciesInfo(targetSpecies,rawSpeciesInfo){
	return rawSpeciesInfo.filter(animalsData => {
		return animalsData.物種 === targetSpecies;
	})
}

function printCardWrap(targetSpeciesInfo){
	var cardWrap = document.querySelector('.card-section');
	var listTemplate = "";

	for(var i = 0; i < targetSpeciesInfo.length; i++){
		listTemplate += `
		<div class="card">
			<div class="card-top">
				<div class="card-top-photo"></div>
				<div class="card-top-text">
					<h3 class="animal-name">${targetSpeciesInfo[i].名字}<span class="animal-species">${targetSpeciesInfo[i].物種}</span></h3>
					<p class="animal-theme">${targetSpeciesInfo[i].主題}<span class="animal-material">${targetSpeciesInfo[i].材料}</span></p>
				</div>
			</div>
			<div class="card-bottom">
				<p class="special-wish">特別願望家具：${targetSpeciesInfo[i].特別願望}</p>
				<p class="wish-level">特別願望等級：${targetSpeciesInfo[i].願望需求lv}</p>
				<p class="meet-method">相遇方式：${targetSpeciesInfo[i].相遇方式}</p>
				<p class="lesson-title">課程階段</p>
				<table class="lesson-list">
					<tr class="list-title">
						<th>1</th>
						<th>2</th>
						<th>3</th>
						<th>4</th>
						<th>5</th>
					</tr>
					<tr>
						<td>${targetSpeciesInfo[i].課程1}</td>
						<td>${targetSpeciesInfo[i].課程2}</td>
						<td>${targetSpeciesInfo[i].課程3}</td>
						<td>${targetSpeciesInfo[i].課程4}</td>
						<td>${targetSpeciesInfo[i].課程5}</td>
					</tr>
				</table>
			</div>
		</div>
		`
	}
	cardWrap.innerHTML = `
	<div class="card-list">
		${listTemplate}
	</div>
	`
}

getTotalAnimalsData(function(res){
	var selectSpecies = document.getElementById('select-option');
	var animalsData = res;
	console.log(animalsData[0].願望需求lv);

	selectSpecies.innerHTML = getSelectSpecies(animalsData);

	selectSpecies.addEventListener('change',function(e){
	var targetSpecies = e.target.value;
	var targetSpeciesInfo = [];
	
	targetSpeciesInfo = getTargetSpeciesInfo(targetSpecies,animalsData)
	printCardWrap(targetSpeciesInfo);

})

})
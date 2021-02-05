function getTotalAnimalsData(callback){
	fetch('//gsx2json.com/api?id=1lJhPRCKvFyHVIT5PSG95-gQeBicZUfiU3gqUL4vws6k&columns=false')
	.then(function(response){
		return response.json()
	})
	.then(function(response){
		callback(response.rows);

	})
}


function getSelectSpecies(animalsData){
	var template = `<option value="">---請選擇動物物種---</option>`
	var animalSpeciesArray = [];

	for(var i = 0; i < animalsData.length; i++){
		if(animalSpeciesArray.indexOf(animalsData[i].物種) === -1){
			template += `<option value="${animalsData[i].物種}">${animalsData[i].物種}</option>`
			animalSpeciesArray.push(animalsData[i].物種);
		}
	}
	return template;
}
function getSelectＭaterial(animalsData){
	var template = `<option value="">---請選擇材料類型---</option>`
	var animalＭaterialArray = [];

	for(var i = 0; i < animalsData.length; i++){
		if(animalＭaterialArray.indexOf(animalsData[i].材料) === -1){
			template += `<option value="${animalsData[i].材料}">${animalsData[i].材料}</option>`
			animalＭaterialArray.push(animalsData[i].材料);
		}
	}
	return template;
}


function getTargetSpeciesInfo(targetSpecies,rawSpeciesInfo){
	return rawSpeciesInfo.filter(animalsData => {
		return animalsData.物種 === targetSpecies;
	})
}
function getTargetＭaterialInfo(targetＭaterial,rawＭaterialInfo){
	return rawＭaterialInfo.filter(animalsData => {
		return animalsData.材料 === targetＭaterial;
	})
}

function printAllCard(animalsData){
	var cardWrap = document.querySelector('.card-section');
	var listTemplate = "";

	for(var i = 0; i < animalsData.length; i++){
		listTemplate += `
		<div class="card">
			<div class="card-top">
				<div class="card-top-photo"></div>
				<div class="card-top-text">
					<h3 class="animal-name">${animalsData[i].名字}<span class="animal-species">${animalsData[i].物種}</span></h3>
					<p class="animal-theme">${animalsData[i].主題}<span class="animal-material">${animalsData[i].材料}</span></p>
				</div>
			</div>
			<div class="card-bottom">
				<p class="special-wish">特別願望家具：${animalsData[i].特別願望}</p>
				<p class="wish-level">特別願望等級：${animalsData[i].願望需求lv}</p>
				<p class="meet-method">相遇方式：${animalsData[i].相遇方式}</p>
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
						<td>${animalsData[i].課程1}</td>
						<td>${animalsData[i].課程2}</td>
						<td>${animalsData[i].課程3}</td>
						<td>${animalsData[i].課程4}</td>
						<td>${animalsData[i].課程5}</td>
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

function printCardWrapSpecies(targetSpeciesInfo){
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
function printCardWrapＭaterial(targetＭaterialInfo){
	var cardWrap = document.querySelector('.card-section');
	var listTemplate = "";

	for(var i = 0; i < targetＭaterialInfo.length; i++){
		listTemplate += `
		<div class="card">
			<div class="card-top">
				<div class="card-top-photo"></div>
				<div class="card-top-text">
					<h3 class="animal-name">${targetＭaterialInfo[i].名字}<span class="animal-species">${targetＭaterialInfo[i].物種}</span></h3>
					<p class="animal-theme">${targetＭaterialInfo[i].主題}<span class="animal-material">${targetＭaterialInfo[i].材料}</span></p>
				</div>
			</div>
			<div class="card-bottom">
				<p class="special-wish">特別願望家具：${targetＭaterialInfo[i].特別願望}</p>
				<p class="wish-level">特別願望等級：${targetＭaterialInfo[i].願望需求lv}</p>
				<p class="meet-method">相遇方式：${targetＭaterialInfo[i].相遇方式}</p>
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
						<td>${targetＭaterialInfo[i].課程1}</td>
						<td>${targetＭaterialInfo[i].課程2}</td>
						<td>${targetＭaterialInfo[i].課程3}</td>
						<td>${targetＭaterialInfo[i].課程4}</td>
						<td>${targetＭaterialInfo[i].課程5}</td>
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
	var selectSpecies = document.getElementById('select-species');
	var selectＭaterial = document.getElementById('select-material');
	// var selectTheme = document.getElementById('select-theme');
	// var selectMeet = document.getElementById('select-meet');
	var animalsData = res;
	printAllCard(animalsData);
	console.log(animalsData[0].願望需求lv);

	selectSpecies.innerHTML = getSelectSpecies(animalsData);
	selectＭaterial.innerHTML = getSelectＭaterial(animalsData);
	// selectTheme.innerHTML = getSelectSpecies(animalsData);
	// selectMeet.innerHTML = getSelectSpecies(animalsData);

	selectSpecies.addEventListener('change',function(e){
		var targetSpecies = e.target.value;
		var targetSpeciesInfo = [];
		
		targetSpeciesInfo = getTargetSpeciesInfo(targetSpecies,animalsData)
		printCardWrapSpecies(targetSpeciesInfo);
	})
	selectＭaterial.addEventListener('change',function(e){
		var targetＭaterial = e.target.value;
		var targetＭaterialInfo = [];
		
		targetＭaterialInfo = getTargetＭaterialInfo(targetＭaterial,animalsData)
		printCardWrapＭaterial(targetＭaterialInfo);
	})

})
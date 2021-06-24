const newArrayBtn = document.getElementById('new-array');
const startSort = document.getElementById('start-sort');
const bars = document.getElementById('sorting');
var arr = [];
function newArray(){
	for(let i = 1; i<=100; i++){
		var random = (Math.floor(Math.random()*100) + 1)*4;
		arr.push(random);
		var div = document.createElement('div');
		div.classList.add('bar');
		div.style.height = (random + "px");
		bars.appendChild(div);
	}
}
newArray();
newArrayBtn.addEventListener('click', ()=>{
	arr = [];
	startSort.disabled = false;
	document.getElementById('sorting').querySelectorAll('*').forEach(n => n.remove());
	newArray();
});
async function finalColor(){
	for(let i = 0; i < arr.length; i++){
		bars.children[i].classList.add('sorted-bar');
		await new Promise((resolve)=>
			setTimeout(()=>{
				resolve();
			},10)
		);
	}
	await new Promise((resolve)=>
		setTimeout(()=>{
			resolve();
		},1500)
	);
	for(let i = 0; i < arr.length; i++){
		bars.children[i].classList.remove('sorted-bar');
	}
}
startSort.addEventListener('click', ()=>{
	const sortingTechnique = document.getElementById('sorting-technique').value;
	const speed = document.getElementById('speed').value;
	newArrayBtn.disabled = true;
	startSort.disabled = true;
	if(sortingTechnique === 'bubble-sort'){
		bubbleSort(speed);
	}
	if(sortingTechnique === 'selection-sort'){
		selectionSort(speed);
	}
});
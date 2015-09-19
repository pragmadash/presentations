var data = [];
while(data.length < Number(process.argv[2])) {
	data.push(Math.round(Math.random() * 100));
}
console.log('var data = ');
console.log(data);
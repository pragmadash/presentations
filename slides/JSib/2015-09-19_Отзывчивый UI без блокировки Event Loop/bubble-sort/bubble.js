function sort(arr) {
	var tmp = null;
	for(var i = 0; i < arr.length; i++)
		for(var j = 0; j < arr.length - 1; j++) {
			console.log(i + ' ' + j);
			if(arr[j] > arr[j+1]) {
				tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
}
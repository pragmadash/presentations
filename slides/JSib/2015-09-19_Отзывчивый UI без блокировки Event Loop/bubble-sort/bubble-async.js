function sortStep(arr, i, j, callback) {
	console.log(i + ' ' + j);
	if(arr[j] > arr[j + 1]) {
		var tmp = arr[j];
		arr[j] = arr[j + 1];
		arr[j + 1] = tmp;
	}
	if (++j === arr.length - 1) {
		i++; j = 0;
	}
	if (i === arr.length) {
		callback();
		return;
	}
	setTimeout(sortStep.bind(this, arr, i, j, callback));
}

function sortAsync(arr, callback) {
	if (arr.length < 2) {
		callback();
		return;
	}
	sortStep(arr, 0, 0, callback);
}

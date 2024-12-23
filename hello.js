let arr = [20,30,40,50,60]

let findAvg=(arr)=>{
	for (let i=1;i<=arr.length;i++){
		avg=avg+arr[i];
	}
	avg=avg/arr.length;
	console.log(avg);
}

findAvg(arr);


	const checkApprox = (num1, num2, epsilon = 0.004) => { 
	return Math.abs(num1 - num2) < epsilon; 
	} 
	
	console.log(checkApprox(0.003, 0.03)); 



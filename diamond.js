const space = function (spc) {
	let S = "";
	for (let i=0; i<spc; i+=1) {
		S = S + " ";
	};
	return S;
};

const star = function (str) {
	let T = "";
	for (let i=0; i<str; i+=1) {
		T = T + "*";
	};
	return T;
};

const diamond = function(n) {
	if (n%2 === 0) {
		n = n + 1;
	};
	for (let i = 1; i<=n; i+=2) {
		console.log(space((n-i)/2) + star(i));
	}
	for (let i = n-2; i>=1; i-=2) {
		console.log(space((n-i)/2)+ star(i));
	}
};

diamond(9);
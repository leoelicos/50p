const charCodeLowerA = 97;
const charCodeUpperA = 65;
const lettersInAlphabet = 26;
const digitsInDecimalSystem = 9 - 0 + 1;
const charCodeZero = 48;
const symbols = '!@#$%^&*(){}[]=<>/,.';

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	if (!password) {
		return;
	}
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard!');
});

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	console.log(length);
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

	if (typesCount === 0) {
		return '';
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArray.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * lettersInAlphabet) + charCodeLowerA);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * lettersInAlphabet) + charCodeUpperA);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * digitsInDecimalSystem) + charCodeZero);
}

function getRandomSymbol() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol());

//1
function hasTwoCubeSums(n) {
	let limit = (n ** (1/3)) + 1;
  let count = 0;
  for(let i = 1; i < limit; i++){
    for(let j = 1; j < limit; j++){
      if(i**3 + j**3 == n){
        count += 1;
        if(count > 2){
          return true;
        }
      }
    }
  }
  return false;
}

//2
function ipv4Parser(ip, mask){
  const ipOctets = ip.split('.').map(Number);
  const subnetOctets = mask.split('.').map(Number);

  const networkOctets = [];
  const hostOctets = [];

  for (i = 0; i < 4; i++){
    networkOctets.push(ipOctets[i] & subnetOctets[i]);
    hostOctets.push(ipOctets[i] & (~subnetOctets[i] & 255));
  }

  const networkBlock = networkOctets.join('.');
  const hostIdentifier = hostOctets.join('.');
  return [networkBlock, hostIdentifier];
}

//3
function whatCentury(year)
{
  let century = Math.ceil(year/100); 
  let suffix = 'th';
  if(century < 11 || century > 13){
    switch(century % 10){
        case 1:
          suffix = 'st';
          break;
        case 2:
          suffix = 'nd';
          break;
        case 3:
          suffix = 'rd';
          break;
    }
  }
  return century + suffix;
}

//4
function findMissing(list) {
    let low = list[0];
    let high = low;
    for (let i of list){
        if(i < low) low = i;
        else if (i> high) high = i;
    }
    let step = (high - low) / list.length;
    let mid = low + Math.floor((high - low) / 2);
    let expSum = (low - mid + high - mid) * (list.length + 1) / 2;
    let sum = 0;
    for (let i of list){
        sum += i -mid;
    }
      return expSum - sum + mid;
}

//5
function primeFactors(n){
  let div = 2;
  pairs = {};
  while(n > 1){
    if(n % div === 0){
      pairs[div] = (pairs[div] || 0) + 1;
      n /= div;
    }
    else{
      div += 1;
    }
  }
  
  return Object.entries(pairs).map(([n1, p1]) => p1 > 1 ? `(${n1}**${p1})` : `(${n1})`).join('');
}

//6
function toWeirdCase(string){
  return string.split(' ').map((word) => [...word].map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ');
}

//7
function wave(str){
  let result = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] != ' '){
      let temp = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(temp);
    }
  }
  return result;
}

//8
function expandedForm(num) {
  let copyNum = num, count = 1;
  let arr = [];
  while (num > 0){
    let dif = copyNum % Math.pow(10, count);
    if(dif != 0){
      arr.push(dif);
      copyNum -= dif;
    }
    num /= 10;
    count++;
  }
  
  return arr.reverse().join(' + ');
}

//9


//10


//11


//12


//13


//14


//15


//16


//17


//18





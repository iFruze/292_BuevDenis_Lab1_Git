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
function solution(str){
  if(str.length % 2 != 0){
    str += '_';
  }
  let res = [], iter = 0;
  for(let i = 0; i < str.length; i+=2){
    res[iter++] = str[i] + str[i+1];
  }
  return res;
}

//10
function bingo(ticket, win){
  let wins = 0;
  for(let i = 0; i < ticket.length; i+=1){
    let code = ticket[i][1];
    let str = ticket[i][0];
    let f = false;
    for(let j = 0; j < str.length; j +=1){
      if(str[j].charCodeAt(0) === code){
        if(f != true){
          wins += 1;
          f = true;
        }
      }
    }
  }
  return wins >= win ? "Winner!" : "Loser!";
}

//11
function domainName(url){
  return url.replace(/^https?:\/\//, '').split("\/")[0].replace(/^www\./, '').split(".")[0];
}

//12
function longest(arr, n) {
  for(let i = 0; i < arr.length - 1; i+=1){
    for(let j = 0; j < arr.length - 1 - i; j+=1){
      if(arr[j].length === arr[j+1].length){
        continue;
      }
      else{
        if(arr[j + 1].length > arr[j].length){
          let t = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = t;
        }
      }
    }
  }
  return arr[n-1];
}

//13
function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.slice(1, 3), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    b: parseInt(hexString.slice(5, 7), 16)
  };
}

//14
function isCircleSorted( arr ){
  let count = 0;
  for(let i = 0; i < arr.length; i+=1){
    if(arr[i] > arr[(i + 1) % arr.length]){
      count += 1;
    }
  }
  return count <= 1;
}

//15
function howManyTimes(time1, time2) {
  let count = 0;
  let start = new Date(time1);
  let end = new Date(time2);

  for(let t = start; t < end;){
    let seconds = 0;
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();
    
    if(m === 0 && s === 0){
      seconds = h % 12;
      if(seconds === 0){
        seconds = 12;
      }
      
      for(; t.getSeconds() < seconds && t < end;){
        count += 1;
        t = new Date(t.setSeconds(t.getSeconds() + 1));
      }
    }
        
    if(m === 30 && s === 0){
      count += 1;
    }
    t = new Date(t.setSeconds(t.getSeconds() + 1));
  }
  return count;
}

//16
Array.prototype.square = function(){
  return this.map(x => x**2);
};

Array.prototype.cube = function(){
  return this.map(x => x**3);
};

Array.prototype.average = function(){
  return this.length === 0 ? NaN : this.sum() / this.length;
};


Array.prototype.sum = function(){
  return this.reduce((acc, x) => acc + x, 0);
};

Array.prototype.even = function(){
  return this.filter(x => x % 2 === 0);
};

Array.prototype.odd = function(){
  return this.filter(x => x % 2 !== 0);
};

//17
function cache(func) {
  const memo = new Map();
  return function(...args){
    const key = JSON.stringify(args);
    
    if(memo.has(key)){
      return memo.get(key);
    }
    
    const res = func(...args);
    memo.set(key, res);
    return res;
  };
}

//18
function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`.replace(/,/g, '');
}
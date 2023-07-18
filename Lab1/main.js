//----------1. Remove all dollar sign of a string

function removeDollarSign(text) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== '$') {
            result += text[i];
        }
    }
    
    return result;
}

const input = '$80% percent of $life is to show $up';
const output = removeDollarSign(input);
console.log(output);

//----------2. Binary Agents
function binaryAgent(str) {
    
    let binaryArr = str.split(" "); // Tách các số nhị phân thành phần tử con, dựa vào khoảng trắng để tách chuỗi, ko có tham số limit ở đây
    let textArr = binaryArr.map(binary => String.fromCharCode(parseInt(binary, 2))); // map duyệt qua từng phần tử trong mảng, parseIntđể chuyển chuỗi nhị phân thành số nguyên, String.fromCharCode số nguyên thành mã ASCII
    let text = textArr.join(''); // Kết hợp các ký tự trong mảng thành chuỗi hoàn chỉnh, ko có khoảng cách
  
    return text;
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  // Output: "Aren't bonfires fun!?"

//----------3. Beans counting
function countBs(input_as_string){
    let count = '';
    for (let i = 0; i < input_as_string.length; i++){
        if (input_as_string[i] === 'B'){
            count ++;
        }
    }
    return count;
}
console.log(countBs("aaaaaaaaBaaaaaaaB"));


function countChar(input_as_string,char){
    let count = '';
    for (let i = 0; i < input_as_string.length; i++){
        if (input_as_string[i] === char){
            count ++;
        }
    }
    return count;
}

console.log(countChar("aaaaaaaaaBBBBBBaaaBaaa","a"));


//----------4. Semiprimes
function Prime(num) {
    if (num <= 1) 
    return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function countDistinctPrimeFactors(num) {
    let count = 0;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0 && Prime(i)) {
        count++;
        while (num % i === 0) {
          num /= i;
        }
      }
    }
    return count;
  }
  
  function semiprime(num) {
    const distinctPrimeFactors = countDistinctPrimeFactors(num);
  
    if (distinctPrimeFactors === 2) {
      return "Semiprime";
    } else if (distinctPrimeFactors === 1) {
      return "Squarefree Semiprime";
    } else {
      return "Neither";
    }
  }
  
  console.log(semiprime(15)); 
  console.log(semiprime(49)); 
  console.log(semiprime(97)); 
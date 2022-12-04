function palindrome(str){
  let bag=""
  for
    (let i=str.length;i>=0;i--){
      bag+=str[i];
    }
  console.log(bag==str)
}
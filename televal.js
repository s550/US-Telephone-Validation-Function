function telephoneCheck(str) {
let bigEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g
if(bigEx.test(str)){
  return true;
}
else{
  return false;
}
}

telephoneCheck("555-555-5555");

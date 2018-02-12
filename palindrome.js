function isPalindrome(str){
    if(str.length <= 1){
        return true;
    }else{
        if(str.charAt(0) !== str.charAt(str.length - 1)){
            return false;
        }else{
            return isPalindrome(str.slice(1,str.length-1));
        }
    }
}

console.log(isPalindrome("rotor"));
console.log(isPalindrome("hello"));
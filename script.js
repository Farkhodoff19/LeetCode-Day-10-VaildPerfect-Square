/*
    #Masalaning sharti
    Agar 5 * 5 = 25 = true qiymat qaytarsin
    Agar 3..? * 3..? = 14 = false qaytarsin
*/

function isPerfectSquare(num) {
    for(let i=1; i * i <= num; i++) {
        if(i*i == num) return true;
    }
    return false;
}

console.log(isPerfectSquare(16));
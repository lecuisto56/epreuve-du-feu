let number = process.argv[2];
function facto ( nbr){
    if (nbr ===0){
        return 1;
    }
    return nbr * facto(nbr-1);

}
console.log(facto(number));
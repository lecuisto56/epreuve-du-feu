let number = process.argv.slice(2);

function tri(nbr) {
    let flag = false;
    while (!flag) {
        flag = true;
        for (let i = 1; i < nbr.length; i++) {
            if (nbr[i - 1] > nbr[i]) {
                flag = false;
                let choix = nbr[i - 1];
                nbr[i - 1] = nbr[i];
                nbr[i] = choix;

            }

        }
    }
    return nbr;
}
tri(number);
console.log(number);
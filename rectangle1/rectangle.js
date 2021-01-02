var fs = require('fs');
var rec1 = fs.readFileSync('./' + process.argv[2], 'utf8').split("\n");
var rec2 = fs.readFileSync('./' + process.argv[3], 'utf8').split("\n");


function emplacement(array1, array2) {

    for (var i = 0; i < array2.length; i++) {
        for (var j = 0; j < array2[i].length; j++) {
            if (array2[i][j] == array1[0][0] && array2[i][j + 1] == array1[0][1] && array2[i][j + 2] == array1[0][2]) {




                if (array2[i + 1][j] == array1[1][0] && array2[i + 1][j + 1] == array1[1][1] && array2[i + 1][j + 2] == array1[1][2]) {



                    if (array2[i + 2][j] == array1[2][0] && array2[i + 2][j + 1] == array1[2][1] && array2[i + 2][j + 2] == array1[2][2]) {
                        console.log("les positions sont:" + (i + 1) + "," + (i + 2) + "," + (i + 3) + " " + "et les  colonnes" + "," + (j + 1) + "," + (j + 2) + "," + (j + 3));
                    }
                }
            }
        }
    }


    }    emplacement(rec1, rec2);
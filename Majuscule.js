 let maj = process.argv[2];
 let resultat;
 let choix = 0;
 for (i = 0; i < maj.length; i++) {
   choix++;
   if (i == 0) {
     resultat = maj[i].toLowerCase();
   } else if (maj.charAt(i) == " ") {
     choix--;
   }
   if (i !== 0) {
     if (choix % 2 == 1) {
       resultat += maj.charAt(i).toUpperCase();
     } else {
       resultat += maj.charAt(i).toLowerCase();
     }
   }
 }
 console.log(resultat);
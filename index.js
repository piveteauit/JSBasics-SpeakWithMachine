    const num = 12; // Pour la machine: A la place libre n° 1-A de la mémoire je stocke: 12.
    // La variable accessible sous le nom de "num" est égale à "Vas me chercher la valeur de 1-A"
    
    const str = "Great"; // Pour la machine: Aux places libres du n° 3-C à 3-G de la mémoire je stocke: "Great".
    // La variable accessible sous le nom de "str" est égale à "Vas me chercher les valeurs de 3-C jusqu'à 3-G"

    
    const obj = { num: 1, str: "It" };  // Pour la machine: Aux places libres 1-C, 1-D je stocke "It"
                                        // A la place libre 7-I je stocke 1
                                        // A la place libre 5-A je stocke les réféences 1-C, 1-D et 7-I
     // La variable accessible sous le nom de "obj" est égale à "Vas me chercher les valeurs de 5-A. 
     // Comme il s'agit de référence vers d'autres emplacements, 
     // la machine fera la récursion pour ensuite aller chercher chacune des valeurs jusqu'à n'avoir plus que des valeurs finales"
    
    const objCopied = obj;      // Pour la machine: A la place libre I-1, copies moi le contenu de la case 5-A
                                // Lors de l'assignation, la machine n'ira pas chercher récursivement les valeurs
                                // >> C'est la nuance entre les variables dites "primitives" et "non primitives"


    // console.log(obj.num); // 1
    // console.log(objCopied.num); // 1
    objCopied.num = 34;
    // console.log(objCopied.num); // 34
    // console.log(obj.num); // 34

    const objCloned = { ...obj }; // On tout restocké 2 fois
    objCloned.num = 110;
    
    // console.log(obj.num); // 34
    // console.log(objCloned.num); // 110



    
    const arr = [ 2, "So" ];    // Pour les tableux, c'est le même principes, la machine stocke les références vers les valeurs
    const arrCopied = arr;      //  Cela copiera donc la liste des références dans une nouvelle case de la mémoire 




    function greet() {
        // const name = ('vaeur ici')
        // Pour une fonction, idem, on va la stocker en mémoire, puis elle créera et utilisera les références nécessaires
        console.log(`Hi ${name} !`)
    }


    const obj2 = {
        first: "11111",
        last: "9999",
    }
    
    function destructLog ({ first, last }) {
        // const first = obj2.first;
        // const { first, last } = obj2;
        // console.log(first);

        console.log(first, last)


    }

    const param = {first: "lalala", last: "loaloaolroorlg",}
    destructLog(param);

    const test = {...param};
    
//    const name = "Toto";
  //  greet();


function returnArray () {
    return ["toto", "tata", "titi", "tutu"];
}

// const mavalue = returnArray();
// console.log(mavalue)

const [unused, unused2, ...maxiBestOf] = returnArray();



function printAll({...params}) {
    console.log("-->", params)
}


printAll("123", "tu", "la");
// console.log(maxiBestOf)


function getOperator(opName) {
    return (opName === "add")
        ? function (a, b, c, d, e) {
            return a + b + c + d + e
        }
        : (a, b) => a - b;
}

const maFunc = getOperator("add");

console.log(
    [10, 20, 30]
        .map(maFunc)

    //a:  10, 20, 30
    //b:  0, 0, 0
    //c:  NaN, NaN, NaN
    //d: undefined, undefined, undefined
    // e: 10, 21, 32
    //
)
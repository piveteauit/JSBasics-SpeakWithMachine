# Speak With Machine

## Memory

```javascript
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

    const arr = [ 2, "So" ];    // Pour les tableux, c'est le même principes, la machine stocke les références vers les valeurs
    const arrCopied = arr;      //  Cela copiera donc la liste des références dans une nouvelle case de la mémoire 

    
    function greet(name) {
        // Pour une fonction, idem, on va la stocker en mémoire, puis elle créera et utilisera les références nécessaires
        console.log(`Hi ${name} !`)
    }
```


  || a | b  | c | d | e | f | g | h | i | j |
  |-| - | -  | - | - | - | - | - | - | - | - |
1 | <font color="green">**12**</font> | 0 | <font color="green">**I**</font> | <font color="green">**t**</font> | 0 | 0 | 0 | 0 | <font color="green">**1-C, 1-D, 7-I**</font> | 0 |
2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
3 | 0 | 0 | <font color="green">**G**</font> | <font color="green">**r**</font> | <font color="green">**e**</font> | <font color="green">**a**</font> | <font color="green">**t**</font> | 0 | 0 | 0 |
4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
5 | <font color="green">**1-C, 1-D, 7-I**</font>  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | <font color="green">**1**</font> |
 
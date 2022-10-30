//#region 1 - Verilmiş ədədin ikinin qüvvəti olub olmadığını yoxlayan alqoritm yazın
// let num = 8;
// if (num!=0) {
//     while (num%2==0) {
//         num/=2;
//     }
//     if (num==1) {
//         console.log("2-nin quvvetidir");
//     }else{
//         console.log("2-nin quvveti deyil");
//     }
// }
//#endregion

//#region 3 - Daxil olunan müsbət tam ədədin sadə və ya mürəkkəb olduğunu tapın


// let num1=5;
// let a;

// if (num1 == 0 || num1 == 1)
// {
//     Console.log(" ne sadedir, ne murekkeb ");
  
// }
// else if( num1<0){
//     console.log("musbet tam eded deyil");
// }
// else
// {
//     for (a = 2; a <= num1 / 2; a++)
//     {
//         if (num1 % a == 0)
//         {
//             console.log(" murekkeb ededdir");
//             return;
//         }
//         else { console.log(" sade ededdir"); }

//     }
   
   
// }


//#endregion
//#region 4 - Ay(month) adı daxil edilir. Çıxışa hansı fəsil olduğunu yazdırsın (switch case ilə yazın)
let month="mart"
switch (month) {
    case "dec":
    case "jan":
    case "fev":
        console.log("winter season");
        break;
    case "mart":
    case "apr":
    case "may":
        console.log("spring season");
        break;
    case "june":
    case "jly":
    case "aug":
        console.log("summer season");
        break;
    case "sep":
    case "okt":
    case "nov":
    console.log("fall season");
        break;
        
    default:
        console.log("is not correct");
        break;
}
//#endregion
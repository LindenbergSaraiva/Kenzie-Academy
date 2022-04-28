function snapCrackle(maxValue){
    let saida = " "
 for(let i = 1; i <= maxValue; i++){
    if(i % 2 == 1 && i % 5 !== 0){
         saida = saida +  "Snap, "
    }else if(i %  2 == 1 && i % 5 == 0){
        saida = saida + "SnapCrackle, "
        
    }else if(i % 5 == 0) {
        saida = saida + "Crackle, "
        
    }else if(i % 2 !== 1 && i % 5 !== 0){
        saida = saida + i + ", "

    }
}console.log(saida)
}

snapCrackle(50)

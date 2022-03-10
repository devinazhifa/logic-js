function checkTypeNumber(givenNumber){
    /* 1. Dilakukan seleksi kondisi, yaitu jika number undefined maka output "ERROR : Password is empty"
        dan jika number bukan number maka output "ERROR : Invalid data type"
       2. Dilakukan pengecekan givenNumber : jika habis dibagi 2 maka return "GENAP", 
       jika tidak habis dibagi 2 maka return "GANJIL"
    */
    if(givenNumber === undefined){
      return "ERROR : Number is empty";
    } else if (typeof givenNumber !== "number"){
      return "ERROR : Invalid data type"
    }
    
    if (givenNumber % 2 === 0){
      return "GENAP";
    } else {
      return "GANJIL";
    }
  }
  
  console.log(checkTypeNumber(10));
  console.log(checkTypeNumber(3));
  console.log(checkTypeNumber("3"));
  console.log(checkTypeNumber({}));
  console.log(checkTypeNumber([]));
  console.log(checkTypeNumber( ));
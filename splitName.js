function getSplitName(personName){
    /*  1. Dilakukan seleksi data type, jika personName bukan string maka return "ERROR : Invalid data type"
        2. Membuat variabel name untuk melakukan split pada personName
        3. Jika panjang nama > 3 maka return "ERROR : Name is not valid"
        4. Jika nama tersebut valid maka akan dilakukan split atau membagi string menjadi substring
     
     */
    if (typeof personName !== "string"){
      return "ERROR : Invalid data type";
    }
    
    const name = personName.split(" ");
    if(name.length > 3){
      return "ERROR : Name is not valid"; //jika nama lebih dari 3 suku kata
    } else
    return {
      firstName : name[0],
      middleName : name[1],
      lastName : name[2],
    }
  }
  
  console.log(getSplitName("Aldi Daniela Pranata"));
  console.log(getSplitName("Dwi Kuncoro"));
  console.log(getSplitName("Aurora"));
  console.log(getSplitName("Aurora Aureliye Sukma Darma"));
  console.log(getSplitName(0));
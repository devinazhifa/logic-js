function isValidPassword(password){
    /*  1. Membuat variabel passwordFormat yang berisi regex untuk menentukan kriteria pass yang valid
        2. Dilakukan seleksi kondisi, yaitu jika password undefined maka output "ERROR : Password is empty"
        dan jika password bukan string maka output "ERROR : Invalid data type"
        3. Dilakukan seleksi kondisi jika password sesuai dengan ketentuan passwordFormat maka return true, 
        jika tidak return false
     */
    const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(password === undefined){
      return "ERROR : Password is empty";
    } else if (typeof password !== "string"){
      return "ERROR : Invalid data type";
    }
    
    if (passwordFormat.test(password)){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isValidPassword('Meong2021'));
  console.log(isValidPassword('meong2021'));
  console.log(isValidPassword('@eong'));
  console.log(isValidPassword('Meong2'));
  console.log(isValidPassword(0222)); 
  console.log(isValidPassword());
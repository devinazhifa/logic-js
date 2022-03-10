function checkEmail(email){
    /* 1. Membuat variabel const emailFormat dengan regex
       2. Dilakukan seleksi kondisi, yaitu jika email undefined maka output "ERROR : Password is empty"
        dan jika email bukan string maka output "ERROR : Invalid data type"
       3. Jika email yg diinputkan sesuai dengan emailFormat maka retun "VALID", jika selain itu return "INVALID"
    */
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email === undefined){
      return "ERROR : Email is empty";
    } else if (typeof email !== "string"){
      return "ERROR : Invalid data type"
    }
    
    if(emailFormat.test(email)){
      return "VALID";
    } else {
      return "INVALID";
    }
  }
  
  console.log(checkEmail('apranata@binar.co.id'));
  console.log(checkEmail('apranata@binar.com'));
  console.log(checkEmail('apranata@binar'));
  console.log(checkEmail('apranata'));
  console.log(checkEmail(3322)); 
  console.log(checkEmail());
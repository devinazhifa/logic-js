function getAngkaTerbesarKedua(nums){
    /*  1. Dilakukan validasi parameter yaitu jika input bukan berupa array of number maka akan return ERROR
        2.  
     
     */
    if (!Array.isArray(nums)) return "ERROR : Invalid parameter. data type must be an array of numbers";
    var largest = 0;
    var secondLargest = 0;
    for (let i in nums) { 
          if (largest < nums[i]) {
              secondLargest = largest;
              largest = nums[i];
          } else if (secondLargest < nums[i]) { 
              if (nums[i] != largest){
                  secondLargest = nums[i];
              }
          }
      }
      return secondLargest;
  }
  const nums = [1,2,6,4,3,5,5,3];
  
  console.log(getAngkaTerbesarKedua(nums));
  console.log(getAngkaTerbesarKedua(0));
  console.log(getAngkaTerbesarKedua());
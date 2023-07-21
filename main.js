function isIsogram(str){
    //... We declare two variables and use indexing with each variable and compare the two to see if they are similar
    str = str.toLowerCase();
    i = 0; 
    j = 0;
    for(i=0; i<str.length; i++){
      for(j=i+1; j<str.length; j++){
        if(str[i] == str[j]){
          return false;
        }
      }
    }
    return true;
  }
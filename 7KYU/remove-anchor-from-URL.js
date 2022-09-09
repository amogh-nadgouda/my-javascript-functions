// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//My Solution

function removeUrlAnchor(url){

    strArray = url.split('')
    finalArray = ''
    
    for (let i =0; i<strArray.length ; i++ ){
      if (strArray[i] == '#')
        {
          return finalArray
        }
      finalArray += strArray[i]  
    }
    return finalArray
    
  }
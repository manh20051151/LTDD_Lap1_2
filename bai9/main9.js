function printForecast(arr) {
    let forecastString = '';
    
    for (let i = 0; i < arr.length; i++) {
      forecastString += `... ${arr[i]}oC in ${i + 1} days `;
    }
    
    console.log(forecastString);
  }
  
  // Test Data 1
  const data1 = [17, 21, 23];
  printForecast(data1);
  
  // Test Data 2
  const data2 = [12, 5, -5, 0, 4];
  printForecast(data2);
  
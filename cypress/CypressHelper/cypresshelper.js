export class cypresshelper 

{  
  
  // --- Random Number ---
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // -- Random String From List -- 
  // getRandomStringFromList(list) {
  //     list = Array.from(list);
  //     if (list.length === 0) {
  //       return null;
  //     }
  //     else{
  //         var randomIndex = Math.floor(Math.random() * list.length);
  //      //   alert(randomIndex)
  //         return randomIndex;}

  //   }

  // -- Random String from List -- 
  getRandomStringFromList(list) {
    let ran = Math.floor(Math.random() * list.length);
    return list[ran]
  }

  setSystemVariable(propertyFileLocation, name) {
    // Reading from system properties.
    let variable = Cypress.env(name);
  
    // If not specified via command line, take it from constants.properties file
    if (!variable) {
      variable = getPropertyValue(propertyFileLocation, name);
    }
    return variable;
  }
  
  // function getPropertyValueFromPropertyFile(propertyFileLocation, name) {
  //   // Implement your logic to read the property value from the property file.
  //   // You can use any JavaScript library or built-in functions to achieve this.
  //   // Here's an example using the 'fs' module from Node.js to read the file synchronously:
  //   const fs = require('fs');
  //   const properties = fs.readFileSync(propertyFileLocation, 'utf-8');
  //   const lines = properties.split('\n');
  //   for (let line of lines) {
  //     if (line.trim().startsWith(name + '=')) {
  //       return line.trim().substring(name.length + 1);
  //     }
  //   }
  //   return null; // Return null if the property is not found in the file.
  // }

  getPropertyValue(propertyFile, propertyName) {
    const prop = accessPropertiesFile(propertyFile);
    return prop.getProperty(propertyName);
}

}
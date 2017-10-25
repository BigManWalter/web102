```
      // Basic examples of JavaScript usage.
      
      // JavaScript is a dynamic language. You never have to specify types like you do in Java. 
      
      // You can refer to elements on the page by their id attribute. "output" is the paragraph defined above.
      output.innerText = "Hello world";    // Sets the text of "output" to "Hello world"
      output.innerText = 5 + 8;            // Output will be 13. Types are automatically converted when necessary in JavaScript.
      output.innerText = Math.random();    // Output will be different each time you refresh the page.
      
      // Declaring functions in JavaScript. Notice you don't need to declare a return type or parameter types.
      function greet(name) {
        return 'Hello ' + name + '. How are you?';
      }
      
      output.innerText = greet('John');
      
      // Declaring variables in JavaScript.
      var myNumber = 1;
      
      // Click event handler. This function will run every time the output element is clicked.
      output.onclick = function() { 
        output.innerText = 'My number is: ' + myNumber;
        
        // if statements and operators are mostly similar to Java and C.
        if (myNumber % 2 == 0)
          output.innerText += '. And it is even!';
          
        myNumber++;
      };
      
      // Objects in JavaScript. You don't declare classes; you just make objects as you need them.
      var person = {
        name: 'John',
        age: 23,
        
        // This introduce() function is in the person object. You can think of it like a method in a Java class.
        introduce: function() { 
          output.innerText = 'My name is ' + this.name + ' and I am ' + this.age + ' years old.';
        }
      }
      
      output.innerText = person.name;
      
      person.introduce();
      person.name = 'Jessica';
      person.introduce();
      person.height = 160;  // new properties can be added to objects on the fly
      output.innerText = person.height;
      
      
      function rollDie() {
        // Math.random() returns a random number between 0 and 1.
        return Math.floor(Math.random() * 6) + 1;
      }
      
      function getAverage(numbers) {
        var sum = 0;

        // "numbers" should be an array of numbers. Loop through them and add them up.
        for (var i = 0; i < numbers.length; i++)
          sum += numbers[i];
          
        return sum / numbers.length;
      }
      
      var pastRolls = [];
      
      output.onclick = function() {
        var roll = rollDie();
        pastRolls.push(roll);    // Array.push(item) adds an item to the end of the array.
        output.innerText = 'You rolled a ' + roll + '. Your average roll is ' + getAverage(pastRolls);
      }
```
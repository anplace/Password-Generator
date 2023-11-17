# Password Generator

## The Challenge
We were tasked with creating a website, given the HTML and CSS starter code, that will prompt the user to create a random password. Once the user clicks the "Generate Password" button, they are prompted with 5 questions; how long would you like the password, would you like an upper case, lower case, number, or special character? The code was then to create a password given the input from the user. 

An example would be, user selects 10 characters for a length comprised of upper case, numbers, and special characters. The code then randomizes a 10 character string from just those options (see the screenshot below).

![image](https://github.com/anplace/Password-Generator/assets/144726483/b398acd0-7541-4c26-873a-c5962a21605b)

## The Troubles
I originally created 5 functions, one for each question. Within those functions, was a line of code to choose a random character from a given string of characters based on the users input. This created a problem of how to run the function numberous times to equate the total length of the password that the user requested. The solution I came to was to create one long string of all possible characters, based off the users input (i.e if they wanted just upper case and numbers, the code would concatenate the strings of upper case characters and numbers. See below screen shot).

![image](https://github.com/anplace/Password-Generator/assets/144726483/94f2e20a-5b9c-4a61-9319-4d89356c1b57)

If the user chose a specific character set (i.e upper case) the following code would execute.

![image](https://github.com/anplace/Password-Generator/assets/144726483/bbd970c4-ad81-4491-afcc-8736dde01e32)

Therfore, possiblePassword would get longer and longer depending on the amount of prompts the user agreed to.

I then wrote a single for loop that would run as many times as the user requested and only select options from the created possiblePassword string. 

![image](https://github.com/anplace/Password-Generator/assets/144726483/6b3d898e-670d-4394-a5a7-a08dbf469f29)

The final step waits for the user to click the "Generate Password" button and then executes the whole function.

After my initial coding, I had over 150 lines of codes but once I determined this shorter method, even with spacing for readability and comments, I was able to cut the code to 86 lines.

## The 'Ah-Ha' moment

While working on this, I hit a few walls and was getting frustrated as this is my first week coding in Java Script. I turned to the University of Texas at Austins, AI which is similart to ChatGPT. The AI is preloaded with all the information relevant to this class so any answers are tailor made for students like myself.

When I prompted the AI with one question about how to code a certain aspect, it unlocked a key understanding of JS in my mind and I suddenly understood the whole program and was able to finish the project in an afternoon.

### Deployed Site
https://anplace.github.io/Password-Generator/

### Github Link
https://github.com/anplace/Password-Generator

### Acknowledgements 
Some of the code within this site was sourced through the instructor staff. The HTML, CSS and 5-10 lines of Javascript were given to me.
A tutor was utilized but merely prompted me with questions and assisted with syntax. The AskBCS Learning Assistance was utilized for some
inspiration code but never copied and pasted directly. The rest of the code is originally mine.
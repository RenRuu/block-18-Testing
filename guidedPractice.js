/*You were hired by a global hotel chain to redesign the functionality of the button panel on their elevators. 
The goal is to replace the outdated panel in over 1,200 different locations. Before you begin coding, you should make a list of all 
the ways these panels should be tested to make sure they are working correctly and respond to unexpected input in a 
way that makes sense.

To complete this guided practice, write as many Unit Tests as possible. If time allows, write at least one 
integration, functional, and acceptance test. Be sure to label each test with its 
associated type (Unit, Integration, Functional, Acceptance).  
*/

// Unit (meaning "Checks the functionality of an individual unit of code.")
// - Test button function / does it press correctly?
// - Check panel for any physical damage 
// - Open panel to observe any physical damage to internal wiring / components

// Integration (meaning "Combining individual modules and testing them as they work together")
// - Press each button to test if it triggers assigned action ex) press open door button = doors open
// - Test if emergency button stops the elevator 

// Functional (meaning "User scenarios on the browser itself by controlling the browser programmatically (e2e)")
/* - Enter elevator > 
        inspect panel of physical damage > 
        test each button function registers correctly >
        open panel to inspect wire quality >
        if everything passes > close panel and remove from defect list
*/ 

// Acceptance (meaning "Application meets the identified requirements ")
// - 
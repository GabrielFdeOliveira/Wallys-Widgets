1- Read and understand the problem and it's requirements.
The program should take any order size and output the packs to fulfill the order according to the given rules. The program should be flexible to accommodate new pack sizes, changes or removal of existing packs. ✅
E
2- Plan the solution:
I'll try to break down the problem into smaller steps and plan the implementation. ✅

    1- Define the available pack sizes;

    2- Accept the user's order size as input;

    3- Validate the user's input;

    4- Initiate an array to hold the result;

    5- Initiate a variable to keep track of the units left in the order;

    6- Create a while loop to check if there are still units to be packed;

    7- Create a for loop to iterate through the pack sizes;

    8- Inside the for loop check if the remaining units are greater than the current package size, so we can move from size to size;

    9- Check if we can fit the largest package in the order, if true, push it to the result, subtract the value from the remaining units and break out the for loop;

    10- If the current pack size is not the largest and there are still more pack sizes to try, use the current pack size to pack as many widgets as possible, inserting it to the result array and breaking out the for loop;

    11- If the current pack size is the smallest, use the next smallest (the one before) pack size to pack the remaining widgets;

    12- At the end, after the remaining units become less than the smallest package, I confirm we really are at the last index and push it anyway to make the remaining get smaller than 0;

3- Write the code:
I used JavaScript, since it's the language I'm more familiar with ✅

4- Test:
Test the solution with various input sizes and pack configurations to ensure that it is working correctly. ✅

5- Refactor:
Refactor the code if I can, trying to improve performance, readability, and maintainability.

    ❌ (Tried to eliminate the 'remaining' variable and subtract the packages from the  numOfWidgets itself, plus compare it to the size packages to decide if we should continue or not, but this only covers exact numbers and doesn't meet the problem's criteria) ❌

6- Build the front-end:
Create some sort of management system for the front-end to manipulate the widgets orders, using the logic built at the back end. ✅

7- Test the front-end:
make sure the App renders as it should. ✅

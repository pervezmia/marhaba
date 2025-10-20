// Practice no. 1

// একটা ফাইলে কোন functioN রে এমন ভাবে রাখা যা অন্য ফাইলে ব্যবহারের উপযোগী তা হলো export .
// অন্য ফাইলের কোন code নিজের ফাইলে ব্যবহার করা হলো import.


//file1.js
export function add (a,b) {
    return a*b;
}


//file2.js
import {add5} from "./ArrayFunction.js";
(add5(20,2));

// Practice no. 2

//file1.js
export default function message (barta) {
    return barta;
}
message("Alhamdulillah I am trying.");


//file2.js
import newMessage from "./file1.js";
message ("This is import file");



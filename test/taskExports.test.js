// import {largestOddNumber} from "../introductionToJavaScript/taskExport";
const largestOddNumber = require("../introductionToJavaScript/taskExport.js")
test("get the largest odd number in a string", ()=> {
    expect(largestOddNumber("5")).toBe("5")
});
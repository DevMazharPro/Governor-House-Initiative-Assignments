var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Madina", "Paris", "Iran", "Makkah", "China", "Iraq", "USA"];
console.log(placesToVisit);
// Sorting without changing list
console.log(__spreadArray([], placesToVisit, true).sort());
// Array is still in it's original order
console.log(placesToVisit);
// Reversal Sorting without changing list
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Array is still in org order 
console.log(placesToVisit);
// Reversing the order
placesToVisit.reverse();
console.log(placesToVisit);
// Again Reversing 
placesToVisit.reverse();
console.log(placesToVisit);
// Again sorting so it's stored in Alphabetical Order
placesToVisit.sort();
console.log(placesToVisit);
// Again sorting it in reversal alphabetical order
placesToVisit.sort().reverse();
console.log(placesToVisit);

// practice no.1
const sentence = "I bought an orange";
const newSentence = sentence.replace("orange","grape");
console.log(newSentence);

// practice no.2
const sentenc = "I like to have apple and banana";
const hasAna = /ana/;
console.log(hasAna.test(sentenc));

// practice no.3
const sen = "I am eating apple. apple is good. apple helps me a lot.";
const newSen = sen.replaceAll(/apple/g, "JavaScript");
console.log(newSen);
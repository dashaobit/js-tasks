// =======длина строки
function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; 
    return message;
}
console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));

// ======номер (индекс) элемента строки
const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length -1]; // length -1  последний индекс=длина строки минус 1

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

// ========копия элементов строки от startIndex и до, но не включая endIndex
function getSubstring(string, length) {
    const substring = string.slice(0, length); 
    return substring;
}
console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));

// ========форматирует строку
function formatMessage(message, maxLength) {
    let result;

    if(message.length<=maxLength){
        result=message;
    } else{
        result=`${message.slice(0, maxLength)}...`
    } 

    return result;
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// =======малый регистр букв
function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); 
    return normalizedInput;
}
console.log(normalizeInput("Hello world"));

// =====включает ли строка часть строки
function checkForName(fullName, name) {
    const result = fullName.includes(name); 
    return result;
}
console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor"));
console.log(checkForName("Egor Kolbasov", "Zhenya"));
console.log(checkForName("Vadim Nekrasov", "Vadim"));
console.log(checkForName("Vadim Nekrasov", "vadim"));

// =======проверка на спам
function checkForSpam(message) {
    let result;

    const resultLow=message.toLowerCase();
    result=resultLow.includes(`spam`) || resultLow.includes(`sale`);
    return result;

    // return message.toLowerCase().includes(`spam`) || message.toLowerCase().includes(`sale`) 
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
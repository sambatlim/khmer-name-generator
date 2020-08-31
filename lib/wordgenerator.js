const subject = require('./word/subject');
const verb = require('./word/verb');
const object = require('./word/object');

function generateSentence(numberOfWord = 3) {

    let subjectArrayLength = subject.length;
    let verbArrayLength = verb.length;
    let objectArrayLength = object.length;

    let generatedSentence = '';

    let i = 1;

    while(i <= numberOfWord){

        let randomSubject = subject[Math.floor(Math.random() * subjectArrayLength)];
        let randomVerb = verb[Math.floor(Math.random() * verbArrayLength)];
        let randomObject = object[Math.floor(Math.random() * objectArrayLength)];

        if(i%3 == 1){

            generatedSentence = generatedSentence + randomSubject;

        }else if(i%3 == 2){

            generatedSentence = generatedSentence + randomVerb;

        }else{

            generatedSentence = generatedSentence + randomObject + '។ ';

        }
        i++;
    }

    return new Promise((resolve,reject)=>{
        if(i > numberOfWord){
            resolve(generatedSentence);
        }
    });
}

module.exports = {generateSentence};
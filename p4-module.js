//import data from the file p4-data.js
const { data } = require("./p4-data.js");
console.log(data);


// Returns an array of strings where each array element is a question.
function getQuestions() {
    // let myArray = Array.from(data)
    let questions = [];
    for (const element of data) {
        questions.push(element.question);
    }
    return questions
}
console.log(getQuestions());



// Returns an array of strings where each array element is an answer.
function getAnswers() {
   
    let answers = [];
    for (const element of data) {
        answers.push(element.answer);
    }
    return answers
}
console.log(getAnswers());



// Returns a copy of the original data array of objects
function getQuestionsAnswers() {

    return data.map((parameter) => { 
        return JSON.stringify({...parameter}, null, 2)
        
    });
    
}
console.log(getQuestionsAnswers());




// Returns an object with the following properties:
// q(stringuestion property ): The question from the data.
// number property (integer): The question number,  not array index value.
// error message property (string): Any error that occurred while getting the question.

function getQuestion(number = ""){
    
    let questions = {
        question: '',
        number: '',
        error: '',
      };
    
      
        if(!Number.isInteger(number)){
            questions.error = 'Question number must be an integer'
        
        } else if (number > 3  ){
            questions.error = 'Question number must be >= 1';

        } else if (number < 3) {
            questions.error = 'Question number must be less than the number of questions (3)';
        }
        else { 
            let indexValue = number - 1; 
            questions.question = data[indexValue].question;
            questions.number = number;
            
        } 
    

        return questions
    }
console.log(getQuestion(-5/3));
    




function getAnswer(number = ""){
    
    let questions = {
        answer: '',
        number: '',
        error: '',
      };
    
      
        if(!Number.isInteger(number)){
          questions.error = 'Answer number must be an integer'

        } else if (number < 1 ){
            questions.error = "Answer number must be >= 1";
        }else if (number > 3) {
          questions.error = "Answer number must be less than the number of questions (3)";
        }else { 
            let indexValue = number - 1; 
            questions.answer = data[indexValue].answer;
            questions.number = number;
            
        } 
    

        return questions
    }
console.log(getAnswer(-3/5));







function getQuestionAnswer(number = ""){
    let questions = {
        answer: '',
        question: '',
        number: '',
        error: '',
      };
    
      
        if(number > 3){
            questions.error = "Question number must be less than the number of questions (3)";
        
        } else if (number < 1 ){
            questions.error = "Question number must be >= 1";
        }else if (!Number.isInteger(number)) {
            questions.error = 'Question number must be an integer'
        }else { 
            let indexValue = number - 1; 
            questions.answer = data[indexValue].answer;
            questions.question = data[indexValue].question;
            questions.number = number;
            
        } 
    

        return questions
    }
    console.log(getQuestionAnswer(1));



    /*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit



  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


  module.exports = {getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer};
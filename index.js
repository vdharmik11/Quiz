var readLineSync = require('readline-sync');
var string = require('string');
console.log('Welcome to the fun quiz about Dharmik....!!');
var count = 0;

var inputy = readLineSync.question('Press \'y\' to start the quiz...')
var score = 0;
function ansVerify(question,option,answer)
{
  console.log(question)
  for(var i = 1; i<=4; i++)
  {
    console.log(option[i])
  }
  //console.log(option)
  var ans = readLineSync.question()
  if(ans.toUpperCase() == answer.toUpperCase())
  {
    score = score + 1
    //console.log(score) 
    return true
  }  
}
if(inputy.toUpperCase() =='Y')
{
    var questionArr = [
      questionOne = {
      question: 'Which is my favourite place to visit?',
      answer : 'a',
      options : {
      1 : 'a. Mountains',
      2 : 'b. Beach',
      3 : 'c. Historical place',
      4 : 'd. Sand Dunes',
    }
    },
    questionTwo = {
      question: 'Which is my favourite food dish?',
      answer : 'b',
      options : {
      1 : 'a. Punjabi',
      2 : 'b. Gujarati',
      3 : 'c. Chinese',
      4 : 'd. South Indian',
    }
    },
    questionThree = {
      question: 'Which is my favourite car?',
      answer : 'd',
      options : {
      1 : 'a. Audi',
      2 : 'b. Volvo',
      3 : 'c. B.M.W',
      4 : 'd. Mercedes Benz',
    }
    },
    questionFour = {
      question: 'Which is my favourite Bike?',
      answer : 'a',
      options : {
      1 : 'a. Yamaha R1M',
      2 : 'b. BMW S1000RR',
      3 : 'c. Honda CBR1000RR',
      4 : 'd. Kawasaki H2R',
    }
    },
    questionFive = {
      question: 'Which is my favourite phone?',
      answer : 'c',
      options : {
      1 : 'a. Iphone 12 Pro',
      2 : 'b. S21 Ultra',
      3 : 'c. Fold 3',
      4 : 'd. OnePlus 9 Pro',
    },
    },
    questionSix = {
      question: 'Which is my favourite game?',
      answer : 'd',
      options : {
      1 : 'a. Cricket',
      2 : 'b. Golf',
      3 : 'c. Hockey',
      4 : 'd. Football',
    },    
  },
   questionSeven = {
      question: 'Which is my favourite watch?',
      answer : 'b',
      options : {
      1 : 'a. Hublot',
      2 : 'b. Omega',
      3 : 'c. Rado',
      4 : 'd. Rolex',
    },    
  },
  questionEight = {
      question: 'Which is my favourite sports car?',
      answer : 'c',
      options : {
      1 : 'a. Lamborghini Aventador',
      2 : 'b. La Ferrari',
      3 : 'c. McLaren 720s',
      4 : 'd. Mercedes GT',
    },    
  },
  questionNine = {
      question: 'Which is my favourite web series?',
      answer : 'c',
      options : {
      1 : 'a. Money Heist',
      2 : 'b. Narcos',
      3 : 'c. Breaking Bad',
      4 : 'd. Friends',
    },    
  },
  questionTen = {
      question: 'Who is my favourite hollywood actor?',
      answer : 'd',
      options : {
      1 : 'a. Vin diesel',
      2 : 'b. The Rock',
      3 : 'c. Daniel Craig',
      4 : 'd. Tom Cruise',
    },    
  },
  
]

  for(var i = 0; i<questionArr.length; i++)
  {
    var bool = ansVerify(questionArr[i].question,questionArr[i].options,questionArr[i].answer);
    if(bool === true)
    {
      count = count + 1;
    }
  }
  console.log('You have scored '+count+' points');
  if(count>=5 && count<10)
    {
      console.log('Congratulation...You are in level 2.');
    }
    else if(count==10)
    {
      console.log('Congratulations...You are in level 3.');
    }
}

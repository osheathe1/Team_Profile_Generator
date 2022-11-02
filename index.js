const inquirer = require('inquirer'); 
//copy paste the other //
const Manager = require('./Lib/Manager');
const Intern = require('./Lib/Intern');
const Engineer = require('./Lib/Engineer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const emp = [];



inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your manager name?",
        
    },

    {
        type: "input",
        name: "id",
        message: "What is your id number?",
        
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?",
        
    },

    {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
        
    },
  ])
  .then((answers) => {
    console.log(answers.officenumber)
    const newmanager = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
    emp.push(newmanager);
    addEmployee()

  });

  // Add interns and engineers
  const addEmployee = () => {
    return inquirer.prompt ({
        type:"list",
        name: "next",
        message:"What would like like to do next?",
        choices: ['add Intern','add Engineer', 'Done']
    })
    
    .then((answer) => {
        console.log(answer)
        if (answer.next === 'add Engineer') {addEngineer(); }
        else if (answer.next === 'add Intern') {addIntern(); }
        else {HTML(); }
    })};

    function addEngineer() {
        inquirer.prompt([ 
            {
                type: "input",
                name: "name",
                message: "What is your Engineer name?",      
            },
            {
                type: "input",
                name: "id",
                message: "What is your id number?",
                
            },
        
            {
                type: "input",
                name: "email",
                message: "What is your email?",
                
            },
            {
                type: "input",
                name: "github",
                message: "What is your github?",
                
            },
        ])
        .then(answers => {
    const newengineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    emp.push(newengineer);
    addEmployee()

        })
    }

    function addIntern() {
        inquirer.prompt([ 
            {
                type: "input",
                name: "name",
                message: "What is your Intern name?",      
            },
            {
                type: "input",
                name: "id",
                message: "What is your id number?",
                
            },
        
            {
                type: "input",
                name: "email",
                message: "What is your email?",
                
            },
            {
                type: "input",
                name: "school",
                message: "What is your school name?",
                
            },
        ])
        .then(answers => {
    const newintern = new Intern(answers.name, answers.id, answers.email, answers.school);
    emp.push(newintern);
    addEmployee()

        })
    }

    function HTML() {
        console.log(emp)
        const html = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
    <div class="row justify-content-center" id="team-cards">
        ${createcards()}
        </div>
    </div>
</main>

</body>
</html>
        `

    }

    function createcards(){
        let cards = ""
        for (let i = 0; i < emp.length; i++) {
            const employee = emp[i];
            const card = `
            <div class="card">
            <h2> ${employee.name} </h2>
            </div>
            `

            cards += card
        }
        return cards
    }
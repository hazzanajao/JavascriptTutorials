/* 1. A company called xyz.fi is a software company that has 5 employees with 3 departments called hr_Department,
software_Department and finance_Department.

write a program using javascript object oriented concept to give detail information about the company, the employees information,
the employees roles , contributions, salaries and the company vision statements.

NB: using constructor method not factory, and nexted object.
Remember {}
*/

const xyz = {
    companyVisionStatement : "To offer tech. support to customers ",
    established_Date : 2010,
    numbersOfEmployees: 5,
    numbersOfDepartments:5,
    namesOfDepartments:" Finance Department, Hr Department, Software Department",

    /*1st nexted object*/
    financeDepartment:{
        employeeNames: " James Pius & Juha Lento ",
        financeHead: "Juha lento",
        financeAssistance:"James Pius "
    },

    /*2nd nexted object*/
    hrDepartment:{
        hrManager: " Veronica Smith",
    },

    /*3rd nexted object*/
    softwareDepartment:{
        employeeNames: " Mikko Eetu & Vincent Uma",
        frontendDeveloper: "Vincent Uma",
        backendDeveloper:"Mikko Eetu "

    },

    /*4th nexted object*/

    financeHead: {
        name: "Juha lento ",
        basicSalary: "4200 ",
        employmentDate : "2021.08.01 ",
        role: "Head of Finance ",
        jobDescription: "To make realistic financial decision, Give financial advice on project cost, Help the CEO and CTO with budgetary plan ",
        contributions:"Helps in project planing, Helped to accomplish huge financial return from employment date till date.",
        benefits: "Health Insurance, Launch Voucher, Holiday Package, e-pass to gym and company's resort centers ",
        tier: "5",
        workExperience: "8",
        getSalary : function  computeSalary(){
            return this.basicSalary + this.workExperience+this.tier
        },

    },
    financeAssistance: {
        name: "James Pius ",
        basicSalary: " ",
        employmentDate : " ",
        role: " ",
        jobDescription: " ",
        contributions:" ",
        benefits: " ",
        tier: " ",
        workExperience: " ",
        getSalary : function  computeSalary(){
            return this.basicSalary + this.workExperience+this.tier
        }
    },
    hrManager: {
        name: " ",
        basicSalary: " ",
        employmentDate : " ",
        role: " ",
        jobDescription: " ",
        contributions:" ",
        benefits: " ",
        tier: " ",
        workExperience: " ",
        getSalary : function  computeSalary(){
            return this.basicSalary + this.workExperience+this.tier
        }
    },
    frontendDeveloper: {
        name: " ",
        basicSalary: " ",
        employmentDate : " ",
        role: " ",
        jobDescription: " ",
        contributions:" ",
        benefits: " ",
        tier: " ",
        workExperience: " ",
        getSalary : function  computeSalary(){
            return this.basicSalary + this.workExperience+this.tier
        }
    },
    backendDeveloper: {
        name: " ",
        basicSalary: " ",
        employmentDate : " ",
        role: " ",
        jobDescription: " ",
        contributions:" ",
        benefits: " ",
        tier: " ",
        workExperience: " ",
        getSalary : function  computeSalary(){
            return this.basicSalary + this.workExperience+this.tier
        }

    },

}

 console.log (xyz.companyVisionStatement,
     xyz.established_Date,
     xyz.financeHead,
     xyz.namesOfDepartments

     )

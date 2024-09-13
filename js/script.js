'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let lang = '';
        languages.forEach(value => lang += " " + value.toUpperCase());
        return `Мне ${age} и я владею языками:${lang}`
    }
};
 console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let rsl = '';
    const {programmingLangs} = plan.skills
    for (let lang in programmingLangs) {
        rsl += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
    }
    return rsl;
}

console.log(showProgrammingLangs(personalPlanPeter));

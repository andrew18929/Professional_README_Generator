function markdownGenerator(data, fileName) {
    return `
    # ${data.title}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    - [Technologies Used](#technologies)
    - [Installation](#installation)
    - [Instructions](#instructions)
    - [Gif](#gif)
    - [Usage](#usage)
    - [Issues](#issues)
    - [Contributions](#contributions)
    - [Test](#test)
    - [License](#license)
    - [GitHub](#github)
    - [Repository Name](#repoName)
    - [Email](#email)

    ## Technologies Used
    ${data.technologies}
    
    ## Installaion
    ${data.installation}
    
    ## Instructions
    ${data.instructions}
    
    ## Gif
    ${data.gif}
    
    ## Usage
    ${data.usage}
    
    ## Issues
    ${data.issues}
    
    ## Contributions
    ${data.contributions}
    
    ## Test
    ${data.test}

    ## License
    ${data.license}
    
    ## GitHub Info
    ${data.github}
    
    ## Repository Name
    ${data.repoName}
    
    ## Email
    ${data.email}
    
    `;
}

module.exports = markdownGenerator;
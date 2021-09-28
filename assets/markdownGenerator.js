function markdownGenerator(data, gitHubInfo) {
    return `
    # ${data.####}
    
    ## Description
    ${data.####}
    
    ## Technologies Used
    ${data.####}
    
    ## Table of Contents
    - [Installation](#...)
    - [Instructions](#...)
    - [Gif](#...)
    - [Usage](#...)
    - [Issues](#...)
    - [Contributions](#...)
    - [Test](#...)
    - [License](#...)
    - [GitHub](#...)
    - [Repository Name](#...)
    - [Email](#...)
    
    ## Installaion
    ${data.####}
    
    ## Instructions
    ${data.####}
    
    ## Gif
    ${data.####}
    
    ## Usage
    ${data.####}
    
    ## Issues
    ${data.####}
    
    ## Contributions
    ${data.####}
    
    ## Test
    ${data.####}

    ## License
    ${data.####}
    
    ## GitHub Info
    ${data.####}
    
    ## Repository Name
    ${data.####}
    
    ## Email
    ${data.####}
    
    `;
}

module.exports = markdownGenerator;
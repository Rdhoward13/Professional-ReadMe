// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(result) {
  if (result.license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (result.license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (result.license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(result) {
  if (result.license === "None") {
    return "";
  } else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(result) {
  if (result.license === "None") {
    return "";
  } else {
    return `## License
${renderLicenseBadge(result)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(result) {
  return `# ${result.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(result)}
* [Contribution](#contribution)
* [Test](#test)
* [GitHub](#github)
* [Email](#email)
## Description
${result.description}
## Installation
${result.installation}
## Usage
${result.usage}
${renderLicenseSection(result)}
## Contribution 
${result.contribution}
## Test
${result.test}
## Github 
${result.github}
## Email 
${result.email}
`;
}

module.exports = generateMarkdown;

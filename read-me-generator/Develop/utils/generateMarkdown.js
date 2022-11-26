const indexImport = require('../index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''

  if(license == 'none') {
    licenseBadge = '';
  } else if (license == 'MIT') {
    licenseBadge = '![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license == 'GPLv2') {
    licenseBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
  } else if (license == 'Apache') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''

  if(license == 'none') {
    licenseLink = ''
  } else if (license == 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license == 'GPLv2') {
    licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  } else if (license == 'Apache') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''

  if(license == 'none') {
    licenseSection = ''
  } else {
    licenseSection = `license : ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:

  ### * [Description](#description)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [License](#license)
  ### * [Contributions](#contributions)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Description: 
  ### ${data.description}

  ## Installation:
  ### You must have the following for the application to function correctly: 
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Contributions
  ### ${data.contributions}

  ## Tests
  ### ${data.tests}

  ## Questions
  ### Have any questions? You can contact me here.
  ### Github: https://github.com/${data.github}
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;

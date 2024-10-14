// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}

export default generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  
  const licenseBadge = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GPL 3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      'ISC': 'https://img.shields.io/badge/License-ISC-blue.svg'
  };

  return licenseBadge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';

  const licenselinks = { 
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0',
    'ISC': 'https://opensource.org/licenses/ISC'
  }
return licenselinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';

  const badge = renderLicenseBadge(license); // Call the badge function
  const link = renderLicenseLink(license);   // Assuming you have the renderLicenseLink function defined

  return `## License\n![License](${badge} "License")
  \nThis project is licensed under the [${license}](${link}) license.`;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

- What was your motivation for creating this project? /n
 ${data.motivation}

- Why did you build this project? /n
 ${data.whybuild}

- What problem does it solve? /n
 ${data.projectproblem}

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

${renderLicenseSection(data.license)}

## Credits
Contributors:
${data.collaborators}

Third-party assets that require attribution: 
${data.thirdparty}

Tutorials: 
${data.tutorials}

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

/* 
------------------------------------------------------------------------------------------------------------

    RENDER LICENSE BADGE FUNCTION - creates a license badge
    // TODO: Create a function that returns a license badge based on which license is passed in - COMPLETE
    // TODO: If there is no license, return an empty string - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/
function renderLicenseBadge(license) {
  if (!license) return '';
  
  // Create a liscenseBadge object
  const licenseBadge = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GPL 3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      'ISC': 'https://img.shields.io/badge/License-ISC-blue.svg'
  };

  return licenseBadge[license];
}








/* 
------------------------------------------------------------------------------------------------------------

    RENDER LICENSE LINK FUNCTION - creates a link to where people can learn more about the license
    // TODO: Create a function that returns the license link - COMPLETE
    // TODO: If there is no license, return an empty string - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/
function renderLicenseLink(license) {
  if (!license) return '';
// Create a liscenselinks object
  const licenselinks = { 
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0',
    'ISC': 'https://opensource.org/licenses/ISC'
  }
return licenselinks[license];
}






/* 
------------------------------------------------------------------------------------------------------------

    RENDER LICENSE SECTION FUNCTION - creates the license section to be used later
  // TODO: Create a function that returns the license section of README - COMPLETE
  // TODO: If there is no license, return an empty string - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/

function renderLicenseSection(license) {
  if (!license) return '';

  const badge = renderLicenseBadge(license); // Call the badge function
  const link = renderLicenseLink(license);   // Call the license link function

  return `## License\n![License](${badge} "License")
  \nThis project is licensed under the [${license}](${link}) license.`;
}






/* 
------------------------------------------------------------------------------------------------------------

    GENERATE MARKDOWN FUNCTION - creates the content of the readme
  // TODO: Create a function to generate markdown for README - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/
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

 ${renderLicenseSection(data.license)}

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

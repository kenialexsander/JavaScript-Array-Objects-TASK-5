// Resume Data in JSON format
//*************************************/
const resumeData = [
  {
    personal_information: {
      name: "KENI ALEXSANDER",
      email: "kenialex@gmail.com",
      phone: "+919789061615",
      address: "123 Main Street, City, State, 12345",
      linkedin: "www.linkedin.com/in/keni-alexsander-0512512a6",
      github: "github.com/kenialexsander",
    },
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        university: "ALAGAPPA UNIVERSITY",
        location: "Karaikudi - 630 003, Tamil Nadu, India",
        graduation_year: "2018",
      },
    ],
    work_experience: [
      {
        position: "Asst Officer IT",
        company: "Rams Fittings",
        location: "Chennai, Tamil Nadu",
        start_date: "Nov 2019",
        end_date: "Present",
        responsibilities: [
          "Developed scalable web applications using Django framework.",
          "Collaborated with cross-functional teams to deliver projects on time and within budget.",
          "Performed code reviews and provided constructive feedback to team members.",
        ],
      },
      {
        position: "Intern",
        company: "Startup Company",
        location: "City, State",
        start_date: "May 2019",
        end_date: "August 2019",
        responsibilities: [
          "Assisted in the development and testing of mobile applications.",
          "Participated in team meetings and brainstorming sessions for product development.",
          "Provided support to senior developers in debugging and troubleshooting.",
        ],
      },
    ],
    skills: [
      "Programming Languages: Python, JavaScript, Java",
      "Web Development: HTML/CSS, Django, React.js",
      "Database Management: SQL, MongoDB",
      "Version Control: Git",
      "Agile Methodologies",
      "Problem-solving and Analytical Skills",
    ],
    languages: [
      {
        language: "Tamil",
        proficiency: "Native",
      },
      {
        language: "English",
        proficiency: "Intermediate",
      },
    ],
    projects: [
      {
        title: "Designing of Residential Buildings",
        description:
          "For fieldwork, acted as the project leader for a team of 5.",
      },
    ],
    declaration:
      "I hereby solemnly declare that the above-furnished details are absolute and true to the best of my knowledge and belief.",
  },
];
/****************************************************************************************/
console.log(resumeData);

// for loop
for (let i = 0; i < resumeData[0].education.length; i++) {
  const educationItem = resumeData[0].education[i];
  console.log(`Education ${i + 1}:`);
  for (const key in educationItem) {
    if (Object.prototype.hasOwnProperty.call(educationItem, key)) {
      console.log(`  ${key}: ${educationItem[key]}`);
    }
  }
}

// for in loop
for (const key in resumeData[0]) {
  if (Object.prototype.hasOwnProperty.call(resumeData[0], key)) {
    console.log(`${key}:`);
  }
}

// for of loop
for (const educationItem of resumeData[0].education) {
  console.log("Education:");
  for (const key in educationItem) {
    if (Object.prototype.hasOwnProperty.call(educationItem, key)) {
      console.log(`  ${key}: ${educationItem[key]}`);
    }
  }
}

// forEach loop
resumeData[0].education.forEach((educationItem, index) => {
  console.log(`Education ${index + 1}:`);
  for (const key in educationItem) {
    if (Object.prototype.hasOwnProperty.call(educationItem, key)) {
      console.log(`  ${key}: ${educationItem[key]}`);
    }
  }
});

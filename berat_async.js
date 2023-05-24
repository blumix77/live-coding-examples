/*
async function generateRandomPerson() {
  try {
    const response = await fetch("https://randomuser.me/ap/");
    //
    const data = await response.json();
    const person = data.results[0];
    const firstName = person.name.first;
    const lastName = person.name.last;
    const email = person.email;
    const phone = person.phone;
    const randomPerson = { firstName, lastName, email, phone };
    return randomPerson;
  } catch (error) {
    throw new Error('sorry');
  }
}

const createPersonHtml = async () => {
  try {
    const person = await generateRandomPerson();

    const container = document.createElement("div");
    container.id = "personContainer";

    const heading = document.createElement("h2");
    heading.textContent = "Random Person Information:";

    const firstNamePara = document.createElement("p");
    firstNamePara.innerHTML = `<strong>First Name:</strong> ${person.firstName}`;

    const lastNamePara = document.createElement("p");
    lastNamePara.innerHTML = `<strong>Last Name:</strong> ${person.lastName}`;

    const emailPara = document.createElement("p");
    emailPara.innerHTML = `<strong>Email:</strong> ${person.email}`;

    const phonePara = document.createElement("p");
    phonePara.innerHTML = `<strong>Phone:</strong> ${person.phone}`;

    container.appendChild(heading);
    container.appendChild(firstNamePara);
    container.appendChild(lastNamePara);
    container.appendChild(emailPara);
    container.appendChild(phonePara);

    document.body.appendChild(container);
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

createPersonHtml();
*/

/*
function generateRandomPerson() {
  return new Promise((resolve, reject) => {
    fetch("https://randomuser.me/ap/")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const person = data.results[0];
        const firstName = person.name.first;
        const lastName = person.name.last;
        const email = person.email;
        const phone = person.phone;
        const randomPerson = { firstName, lastName, email, phone };
        resolve(randomPerson);
      })
      .catch((error) => reject(error));
  });
}


generateRandomPerson()
  .then((person) => {
    
    const container = document.createElement("div");
    container.id = "personContainer";

    const heading = document.createElement("h2");
    heading.textContent = "Random Person Information:";

    const firstNamePara = document.createElement("p");
    firstNamePara.innerHTML = `<strong>First Name:</strong> ${person.firstName}`;

    const lastNamePara = document.createElement("p");
    lastNamePara.innerHTML = `<strong>Last Name:</strong> ${person.lastName}`;

    const emailPara = document.createElement("p");
    emailPara.innerHTML = `<strong>Email:</strong> ${person.email}`;

    const phonePara = document.createElement("p");
    phonePara.innerHTML = `<strong>Phone:</strong> ${person.phone}`;


    container.appendChild(heading);
    container.appendChild(firstNamePara);
    container.appendChild(lastNamePara);
    container.appendChild(emailPara);
    container.appendChild(phonePara);

    document.body.appendChild(container);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
*/






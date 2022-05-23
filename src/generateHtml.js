function generateCard(data) {
    let employeeCard = '';
    data.forEach(employee => {
        let alternateInfo = '';
        if (employee.getRole() === 'Manager') {
            alternateInfo = employee.getOfficeNumber();
        } else if (employee.getRole() === 'Engineer') {
            alternateInfo = employee.getGithub();
        } else {
            alternateInfo = employee.getSchool();
        }
        employeeCard += `
        <div class="col" style="width: 18rem;">
        <div class="card">
            <div class="card-body bg-light">
                <h5 class="card-title">${employee.getName()}</h5>
                <p class="card-text">${employee.getRole()}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee.getId()}</li>
                <li class="list-group-item">${employee.getEmail()}</li>
                <li class="list-group-item">${alternateInfo}</li>
              </ul>
            </div>
        </div>
        `
    });
    return employeeCard;
}

function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
    <header>
        <h1 class="col-12 d-flex justify-content-center bg-primary text-white">My Team</h1>
    </header>
    <div class="container">
        <div class="row row-cols-2 row-cols-md-2 g-4 justify-content-center">
            ${generateCard(data)}
        </div>
    </div>
    </body>
    </html>
    `
}

module.exports = generatePage
function finalExam(array) {
  let projects = [];
  let users = [];

  for (let line of array) {

    if (line.startsWith("addProject")) {
      let projectName = line.replace("addProject ", "");

      projects.push({
        name: projectName,
        users: []
      });
    }

    else if (line.startsWith("addUser")) {
      let userName = line.replace("addUser ", "");

      if (!users.includes(userName)) {
        users.push(userName);
      }
    }

    else if (line.includes("join")) {
      let [userName, projectName] = line.split(" join ");

      let project = projects.find(p => p.name === projectName);

      if (!users.includes(userName)) continue;
      if (!project) continue;

      let already = project.users.find(u => u.username === userName);
      if (already) continue;

      project.users.push({
        username: userName,
        hours: 0
      });
    }

    else if (line.includes("log")) {

      let parts = line.split(" ");
      let userName = parts[0];

      if (!users.includes(userName)) continue;

      if (parts.length === 3) {
        let hours = Number(parts[2]);

        for (let project of projects) {
          for (let user of project.users) {
            if (user.username === userName) {
              user.hours += hours;
            }
          }
        }
      }

      else if (parts.length === 4) {
        let projectName = parts[2];
        let hours = Number(parts[3]);

        let project = projects.find(p => p.name === projectName);
        if (!project) continue;

        let user = project.users.find(u => u.username === userName);
        if (user) {
          user.hours += hours;
        }
      }
    }
  }

  projects.sort((a, b) => {
    let sumA = a.users.reduce((s, u) => s + u.hours, 0);
    let sumB = b.users.reduce((s, u) => s + u.hours, 0);

    return sumB - sumA;
  });

  for (let project of projects) {
    console.log(`Project: ${project.name}`);
    console.log("Users:");

    for (let user of project.users) {
      if (user.hours > 0) {
        console.log(`- ${user.username}: ${user.hours}`);
      }
    }
  }
}
finalExam([ "addProject Website", "addProject App", "addUser Ivan", "addUser Maria", "Ivan join Website", "Maria join Website", "Ivan join App", "Ivan log 5", "Maria log Website 3", "Ivan log App 2" ])
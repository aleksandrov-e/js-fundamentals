function coursesManager(array) {
   let courses = [];
   let students = [];
   for (let line of array) {
      if (line.startsWith("addCourse")) {
         let courseName = line.replace("addCourse ", "");

         courses.push({
            name: courseName,
            students: []
         });

      } else if (line.startsWith("addStudent")) {
         let studentName = line.replace("addStudent ", "");

         students.push(studentName);

      } else if (line.includes("enroll")) {
         let [name, courseName] = line.split(" enroll ");

         let course = courses.find(c => c.name === courseName);

         if (course && students.includes(name)) {
            course.students.push({
               name: name,
               grade: undefined
            });
         }

      } else if (line.includes("grade")) {
         let [name, , courseName, grade] = line.split(" ");

         let course = courses.find(c => c.name === courseName);

         if (course) {
            let student = course.students.find(s => s.name === name);

            if (student) {
               student.grade = grade;
            }
         }
      }
   }
   courses.sort((a, b) => b.students.length - a.students.length);

   for (let course of courses) {
      console.log(`Course: ${course.name}`);
      console.log("Students:");

      for (let student of course.students) {
         if (student.grade !== undefined) {
            console.log(`- ${student.name}: ${student.grade}`);
         }
      }
   }
}
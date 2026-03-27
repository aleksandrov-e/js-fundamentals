function students(array){
   let students = [];

   for (let line of array) {
      
      if (line.startsWith("addStudent")) {
         let studentName = line.replace("addStudent ", "");
         students.push({ name: studentName });

      } else if (line.includes("enrolledIn")) {
         let [name, course] = line.split(" enrolledIn ");

         let student = students.find(s => s.name === name);

         if (student) {
            student.course = course;
         }

      } else if (line.includes("grade")) {
         let [name, grade] = line.split(" grade ");

         let student = students.find(s => s.name === name);

         if (student) {
            student.grade = grade;
         }
      }
   }

   for (let student of students) {
      if (student.name && student.course && student.grade) {
         console.log(JSON.stringify(student));
      }
   }
}
// ['Anna', 'Tom', 'Bob',  'Kate' ]   ['Tom', 'Bob']

allStud = ['Anna', 'Tom', 'Bob', 'Kate'];
retakeStud = ['Tom', 'Bob'];

//1.  find passed students
//2. add Good job

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudents = allStudentsList.filter(
    (name) => !studentsForRetake.includes(name)
  );

  const massages = passedStudents.map((name) => 'Good job, ' + name);
  return massages;
};
console.log(getMessagesForBestStudents(allStud, retakeStud));

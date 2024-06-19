// apidepartments.js

// Define your list of departments
export const departments = [
    { id: 1, name: 'Cardiology', img: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 2, name: 'Neurology', img: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { id: 3, name: 'Oncology', img: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { id: 4, name: 'Orthopedics', img: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { id: 5, name: 'Pediatrics', img: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { id: 6, name: 'Psychiatry', img: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { id: 7, name: 'Radiology', img: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 8, name: 'Plastic Surgery', img: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { id: 9, name: 'Psychiatry', img: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { id: 10, name: 'Pulmonology', img: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 11, name: 'Radiology', img: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { id: 12, name: 'Gastroenterology', img: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { id: 13, name: 'Ear, Nose, & Throat (ENT)', img: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { id: 14, name: 'Eyes', img: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 15, name: 'Dental & Maxillofacial', img: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { id: 16, name: 'Dermatology & Cosmetology', img: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { id: 17, name: 'Anesthesiology', img: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { id: 18, name: 'Diet & Nutrition', img: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
   
  ]; 
  
  // Define a function to get all departments
  const getAllDepartments = () => {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous fetch operation
      setTimeout(() => {
        resolve(departments);
      }, 500); // Simulate 60 second delay
    });
  };
  
  // Export the function to be used in other files
  export { getAllDepartments };
  
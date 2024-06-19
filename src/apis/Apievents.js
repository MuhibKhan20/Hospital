// apievents.js

// Define your list of speakers
export const events = [
  { id: 1, name: 'Harman Kardon', position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar1.png', timing: '10:00 AM - 6:00 PM', branchLocation: 'New York' },
  { id: 2, name: 'Toni Duggan', position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar2.png', timing: '9:00 AM - 5:00 PM', branchLocation: 'Los Angeles' },
  { id: 3, name: 'Philipp Lahm', position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar3.png', timing: '11:00 AM - 7:00 PM', branchLocation: 'Chicago' },
  { id: 4, name: 'Lieke Martens', position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar4.png', timing: '8:00 AM - 4:00 PM', branchLocation: 'Houston' },
  { id: 5, name: 'Fara Williams', position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar5.png', timing: '9:30 AM - 5:30 PM', branchLocation: 'Miami' },
  { id: 6, name: 'Manuel Neuer', position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar6.png', timing: '10:30 AM - 6:30 PM', branchLocation: 'San Francisco' },
  { id: 7, name: 'Lieke Martens', position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar7.png', timing: '10:00 AM - 6:00 PM', branchLocation: 'Seattle' },
  { id: 8, name: 'Muhib Khan',position: 'CEO, Mockplus', img: 'https://bootdey.com/img/Content/avatar/avatar7.png', timing: '10:00 AM - 6:00 PM', branchLocation: 'Seattle' },
  { id: 9, name: 'Lieke Martens',  position: 'CEO, Mockplus',img: 'https://bootdey.com/img/Content/avatar/avatar4.png', timing: '8:00 AM - 4:00 PM', branchLocation: 'Houston' },
];

// Define a function to get all speakers
const getAllevents = () => {
return new Promise((resolve, reject) => {
  // Simulate an asynchronous fetch operation
  setTimeout(() => {
    resolve(events);
  }, 500); // Simulate 60 second delay
});
};

// Export the function to be used in other files
export { getAllevents };

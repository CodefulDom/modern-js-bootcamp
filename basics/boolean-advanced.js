let isAccountLocked = false;
let userRole = 'Admin';

if(isAccountLocked) {
  console.log('Locked account, call customer support.')
} else if(isAccountLocked === false && userRole === 'Admin'){
  console.log(`Welcome to CCB, ${userRole}!`)
} else if(isAccountLocked === false) {
  console.log(`Welcome to CCB, ${userRole}!`);
}
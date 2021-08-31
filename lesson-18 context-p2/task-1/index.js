export let event = {
  guests: [
    { name: 'Tom', email: 't@gmail.com', age: 17 },
    { name: 'John', email: 'user-email', age: 18 },
  ],

  message: 'Welcome to the party',

  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
console.log(event.getInvitations());

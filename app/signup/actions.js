'use server'

export async function signUp(prevState, formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  // Log the fields on the server side
  console.log('Server-side log:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  // Return the fields so they can be logged on the client side
  return {
    message: "Sign up successful!",
    fields: { name, email, password }
  };
}
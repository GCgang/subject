'use server';

export async function logIn(prevState: any, formData: FormData) {
  console.log(prevState);
  console.log(formData);
  console.log(formData.get('password'));
  const password = formData.get('password');
  if (password === '12345') {
    return { success: true, message: 'Welcome back!' };
  } else {
    return { success: false, error: { password: 'Wrong password' } };
  }
}

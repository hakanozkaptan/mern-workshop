export const Error = ({ errors: { title: { type = '' } = {} } = {} }) => {
  let errorMessage = '';
  if (type === 'required') {
    errorMessage = 'Title is required';
  } else if (type === 'maxLength') {
    errorMessage = 'Max Length 100';
  } else if (type === 'minLength') {
    errorMessage = 'Min Length 4';
  }

  return errorMessage;
};

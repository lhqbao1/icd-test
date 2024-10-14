import { atom } from 'jotai';

// Define an atom for the form data
const contactFormAtom = atom({
  name: '',
  email: '',
  phoneNumber: '',
  note: ''
});

export default contactFormAtom;
import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';

const SERVICE_ID = "service_hp8neoe";
const TEMPLATE_ID = "template_6ebdyel";
const PUBLIC_KEY = "1hDUqqi7BSlRcvQNA";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export const sendEmail = async (formData: ContactForm): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Maleesha Dilshan',
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};
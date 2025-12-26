import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  } else {
    console.warn('EmailJS public key not found in environment variables');
  }
};

// Send booking notification
export const sendBookingNotification = async (templateParams) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('Booking notification sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send booking notification:', {
      error,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Present' : 'Missing'
    });
    return { success: false, error };
  }
};

// Send confirmation to customer
export const sendCustomerConfirmation = async (templateParams) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const templateId = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID || 'YOUR_CUSTOMER_TEMPLATE_ID';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  try {
    console.log('Attempting to send customer confirmation to:', templateParams.to_email);
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('Customer confirmation sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send customer confirmation:', {
      error,
      serviceId,
      templateId,
      publicKey: publicKey ? 'Present' : 'Missing'
    });
    return { success: false, error };
  }
};
import api from './api';

interface ContactFormData {
  studentName: string;
  mobile: string;
  class: string;
  goal: string;
  mode: string;
  state: string;
  termsAccepted: boolean;
}

const contactService = {
  /**
   * Submit contact request for callback
   */
  submitCallbackRequest: async (formData: ContactFormData) => {
    try {
      const response = await api.post('/contact/callback', formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting callback request:', error);
      throw error;
    }
  },

  /**
   * Submit general contact form
   */
  submitContactForm: async (formData: any) => {
    try {
      const response = await api.post('/contact', formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
};

export default contactService; 
import api from './api';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  duration: string;
  price: number;
  salePrice?: number;
  features: string[];
  imageUrl: string;
}

const courseService = {
  /**
   * Get all courses
   */
  getAllCourses: async (): Promise<Course[]> => {
    try {
      const response = await api.get('/courses');
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },

  /**
   * Get courses by category
   */
  getCoursesByCategory: async (category: string): Promise<Course[]> => {
    try {
      const response = await api.get(`/courses/category/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${category} courses:`, error);
      throw error;
    }
  },

  /**
   * Get course by ID
   */
  getCourseById: async (id: string): Promise<Course> => {
    try {
      const response = await api.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching course with ID ${id}:`, error);
      throw error;
    }
  }
};

export default courseService; 
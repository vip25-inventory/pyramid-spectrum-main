# SPECTRUM Educational Website

This is a React-based educational website for SPECTRUM, offering JEE, NEET, and Foundation courses, test series, and study materials.

## Project Structure

The project follows a standard React application structure with the following key directories:

- `src/`: Source code directory
  - `components/`: All React components
    - `common/`: Reusable UI components
    - `layout/`: Layout components like Header and Footer
    - `pages/`: Page-level components
  - `assets/`: Static assets like images and icons
  - `App.tsx`: Main application component with routing

## Features

- **Home Page**: Showcase of courses and educational offerings
- **Courses**: Details about various preparation courses
- **Test Series**: Information about different test series
- **Results**: Showcase of student results and achievements
- **Study Materials**: Study materials for JEE, NEET, and Foundation courses
- **Books**: Educational books and resources
- **About**: Information about the institution
- **Contact**: Contact information and form

## Study Materials Section

The Study Materials section is organized as follows:

- **Main Study Materials Page**: Overview of all study materials
- **JEE Study Materials**: 
  - JEE Main study resources
  - JEE Advanced study resources
  - Subject-wise materials (Physics, Chemistry, Mathematics)
- **NEET Study Materials**: Medical entrance exam resources
- **Foundation Study Materials**: Resources for classes 6-10

## Technology Stack

- **Framework**: React with TypeScript
- **Routing**: React Router
- **Styling**: CSS with Bootstrap for responsiveness
- **Icons**: Font Awesome

## Development

To start the development server:

```bash
npm install
npm start
```

## Building for Production

To create a production build:

```bash
npm run build
```

## Project Status

This project is currently under development. Future updates will include:
- User authentication system
- Online test platform
- Student dashboard
- Payment integration for course purchases

## Components

### CollisionButton

A reusable button component with a collision animation effect.

#### Usage

```jsx
import CollisionButton from './components/common/CollisionButton';

// Basic usage
<CollisionButton text="Collision" />

// With click handler
<CollisionButton 
  text="Click Me" 
  onClick={() => console.log('Button clicked!')} 
/>

// With custom href
<CollisionButton text="Go to Home" href="/" />

// With custom class
<CollisionButton 
  text="Custom Style" 
  className="my-custom-class" 
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | required | The text to display on the button |
| href | string | '#' | The URL to navigate to when clicked |
| onClick | function | undefined | Click handler function |
| className | string | '' | Additional CSS classes to add to the button |
| color | string | undefined | Custom color for the button (CSS color value) |

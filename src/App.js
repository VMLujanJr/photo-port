/* So what exactly are Hooks? Hooks are just JavaScript functions that follow two rules: */
/* The first rule is "Only call Hooks from React functions." This should be easy to remember, because you often use Hooks to affect the state of a component in some way and trigger the component to render. */
/* The second rule is "Only call Hooks at the top level". This means that you cannot use them inside for loops, nested functions within your React component, or conditionals. For organizational purposes and to ensure that you're following these rules, you may want to use Hooks towards the top of your React component. */
import React, { useState } from 'react';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life',
    },
    {
      name: 'food',
      description: 'Delicious delicacies',
    },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]);

  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
};

export default App;
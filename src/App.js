import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Topic from './components/Topic/Topic';
import Blog from './components/Blog/Blog';
import Statistics from './components/TopicsDetails/Statistics/Statistics';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/question', element: <Blog></Blog> },
      ],

    },
    {
      path: '*', element: <Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

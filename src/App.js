import AddNewsForm from './components/AddNewsForm';
import NewsNav from './components/NewsNav';
import NewsSearch from './components/NewsSearch';
import { Route, Routes } from 'react-router-dom';
import News from './components/News';

function App() {
  return (
    <>
      <NewsNav />
      <News />
      <Routes>
        {/* <Route path='/' element={<NewsNav />} /> */}
        <Route path='/search' element={<NewsSearch />} />
        <Route path='/add' element={<AddNewsForm />} /> 
        {/* <Route path='/news' element={<News />} />  */}
      </Routes>
    </>
  );
}

export default App;

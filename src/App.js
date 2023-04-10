import AddNewsForm from './components/AddNewsForm';
import NewsNav from './components/NewsNav';
import NewsSearch from './components/NewsSearch';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <NewsNav />
    //   <NewsSearch />
    // </div>
    <>
      <NewsNav />
      <Routes>
        {/* <Route path='/' element={<NewsNav />} /> */}
        <Route path='/search' element={<NewsSearch />} />
        <Route path='/add' element={<AddNewsForm />} />  
      </Routes>
    </>
  );
}

export default App;

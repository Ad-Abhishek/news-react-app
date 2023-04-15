import React, { useEffect, useState } from 'react'
import NewsTable from './NewsTable';

const News = () => {    
  const baseURL = 'https://reqres.in/api/users?page=1'
  const [news, setNews] = useState([]);

  useEffect(() => {
     fetch(baseURL)
      .then((res) => res.json())
      .then((json) => {
        setNews((prevState) => {
          return json.data;
        });
      });
  }, [baseURL]);

  return (
    <div>
        <NewsTable newz={news} />
    </div>
  )
}

export default News;

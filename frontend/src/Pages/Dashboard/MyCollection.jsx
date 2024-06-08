import React,{useState, useEffect} from 'react'
import ArtCard from '../../Components/ArtCard'

const MyCollection = () => {
  const [favorite, setFavorite] = useState([]);

  const fetchFavorite = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getUserFavorites', {
        credentials: 'include'
      });

      if (!response.ok) {
        if (response.status === 401) {
          console.log('User not logged in');
          // window.location.href = '/login';
          return;
        } else {
          throw new Error('HTTP error: ' + response.status);
        }
      }
      const data = await response.json();
      console.log(data);
      setFavorite(data);
    } catch (error) {
      console.error('Error:', error);
    };
  };

  useEffect(() => {
    fetchFavorite();
  }, []);
  
  return (
    <div className='w-full p-6 overflow-y-scroll no-scrollbar text-white grid md:grid-cols-4 2xl:grid-cols-8 gap-5 place-items-center'>
      {/* <ArtCard title="Painting title" price="0.99" image_url="https://source.unsplash.com/random/1920x1920?painting" author_img="https://source.unsplash.com/random/500x500?profile-picture" /> */}
      {favorite.map(item => (
        <ArtCard 
          key={item._id} 
          title={item.title} 
          price={item.price} 
          image={item.image_url}
          author_img={item.author_avatar}
        />
      ))}
    </div>
  )};

export default MyCollection;
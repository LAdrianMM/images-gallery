import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import ImagesSearch from './components/ImagesSearch'

const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [term, setTerm] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])

  return (
    <div className='container mx-auto'>
      <ImagesSearch searchText={text => setTerm(text)} />
      {
        !isLoading && images.length === 0 && <h1 className='text-6xl text-center mx-auto mt-32'>No images found</h1> 
      }
      {
        isLoading 
        ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> 
        : <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4'>
          {images.map(img => (
            <ImageCard key={img.id} img={img} />
          ))}
        </div>
      }
    </div>
  );
}

export default App;

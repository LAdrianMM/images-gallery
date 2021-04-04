import React from 'react'

const ImageCard = ({ img }) => {
  const tags = img.tags.split(',')

  return (
    <div className="min-w-96 max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img src={img.webformatURL} alt='' className='w-full h-96' /> 
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by {img.user}
        </div>
        <ul>
          <li>
            <strong>View: </strong>
            {img.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {img.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {img.likes}
          </li>
        </ul>
      </div> 
      <div className='px-6 py-4'>
        {
          tags.map((tag, index) => (
            <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              #{tag}
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default ImageCard

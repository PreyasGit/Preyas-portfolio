'use client'

import Masonry from 'react-masonry-css'
import ArtItem from '../components/art-items'

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
}

const artworks = [
  { id: 1, title: "Sunset Serenity", imageUrl: "/images/artwork-placeholder.jpg", width: 800, height: 600 },
  { id: 2, title: "Urban Rhythm", imageUrl: "/images/artwork-placeholder.jpg", width: 600, height: 800 },
  { id: 3, title: "Nature's Embrace", imageUrl: "/images/artwork-placeholder.jpg", width: 700, height: 500 },
  { id: 4, title: "Abstract Thoughts", imageUrl: "/images/artwork-placeholder.jpg", width: 500, height: 700 },
  { id: 5, title: "Cosmic Dreams", imageUrl: "/images/artwork-placeholder.jpg", width: 900, height: 600 }
]

export default function Artgallary() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Art Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {artworks.map((artwork) => (
          <ArtItem key={artwork.id} {...artwork} />
        ))}
      </Masonry>
    </div>
  )
}
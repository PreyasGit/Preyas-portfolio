import Image from 'next/image'

interface ArtItemProps {
  id: number
  title: string
  imageUrl: string
  width: number
  height: number
}

export default function ArtItem({ id, title, imageUrl, width, height }: ArtItemProps) {
  return (
    <div className="mb-4">
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      />
      <p className="mt-2 text-sm font-medium text-gray-700">{title}</p>
    </div>
  )
}

import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <div className='relative z-0 w-screen'>
        <Image
          className='object-cover object-center pointer-events-none'
          src='https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg'
          width={2400}
          height={1200}
          layout='responsive'
        />
      </div>
      <div
        className='absolute inset-0 z-10 w-screen text-center'
        style={{ top: '50%' }}
      >
        text over image
      </div>
    </div>
  );
}

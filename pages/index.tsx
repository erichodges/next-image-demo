import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className='flex items-center'>
        <div className='relative z-0 w-screen'>
          <Image
            className='object-cover object-center pointer-events-none'
            src='https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg'
            width={2400}
            height={1200}
            layout='responsive'
          />
        </div>
        <div className='absolute z-10 content-center w-screen text-center'>
          <p className='text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl'>
            sleep deep yoga
          </p>
        </div>
      </div>
      <div>Test div section here</div>
    </div>
  );
}

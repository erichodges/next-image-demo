import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100vw' }}>
        <Image
          src='https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg'
          width={2400}
          height={1200}
          layout='responsive'
        />
      </div>
      <div>Test Div for text content over image</div>
    </div>
  );
}

import { Image } from 'cloudinary-react';

export default function Home() {
  return (
    <div>
      <div>
        <h2>Yo! Responsive</h2>
        <Image
          cloudName='dn3baky3u'
          publicId='v1576797449/gatsby-cloudinary/evora-gt-front'
          width='auto'
        />
      </div>
    </div>
  );
}

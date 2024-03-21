// BlogPreviewCard.tsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import SVGPath from './SVGpath';

interface BlogPreviewCardProps {
  blog: {
    title: string;
    description: string;
    date: string;
    authorName: string;
    authorAvatar: string;
  };
  onClick: () => void;
}

const BlogPreviewCard: React.FC<BlogPreviewCardProps> = ({ blog, onClick }) => {
  const { title, description, date, authorName, authorAvatar } = blog;
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

//    gsap.from(cardRef.current, {
//       duration: 1,
//       x: '100%', // Start off-screen to the right
//       ease: 'power1.inOut',
//       stagger: 0.2, // Stagger each animation by 0.2 seconds
//       onComplete: () => {
//         // Animate along the motion path after staggering
//         gsap.to(cardRef.current, {
//           duration: 5,
//           motionPath: {
//             path: '#motionPath', // Use the ID of the path element from the SVG file
//             autoRotate:true,
//             alignOrigin: [0.5, 0.5],
//           },
//         });
//       },
//     });
gsap.to(cardRef.current, {
    duration: 5,
    motionPath: {
      path: '#motionPath',
      autoRotate: -200,
      alignOrigin: [0.5, 0.5],
    },
    onComplete: () => {
        // Set autoRotate to false at the end of the animation
        gsap.set(cardRef.current, { rotation: 0  });
    }
  }); 
  }, []);

  return (
    <div  ref={cardRef}
      className="w-1/3 vw bg-gradient-to-b from-blue-300 to-blue-100  text-white p-8 relative cursor-pointer"
      style={{ backgroundColor: '#dedede' }}
      onClick={onClick}
    >
        <svg width="1412" height="166" viewBox="0 0 1412 166" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="motionPath" d="M1412 103.466L775.36 1C716.516 7.86744 572.286 28.588 466.117 56.5308C359.947 84.4735 111.802 140.486 1 165" stroke="none"/>
<path id="reverseMotionPath" d="M1 165C111.802 140.486 359.947 84.4735 466.117 56.5308C572.286 28.588 716.516 7.86744 775.36 1L1412 103.466" stroke="none"/>

</svg>
      <div className="absolute top-0 right-0 mt-2 mr-2 text-sm">{date}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="flex items-center">
        <img src={authorAvatar} alt="Author Avatar" className="w-8 h-8 rounded-full mr-2" />
        <p>{authorName}</p>
      </div>
    </div>
  );
};

export default BlogPreviewCard;

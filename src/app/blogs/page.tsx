"use client"
import React from 'react'
import BlogPreviewCard from '@/components/BlogsPreview';
import Bounded from '@/components/Bounded';

 const BlogsPage = () => {
    const blogs = [
        {
          title: 'Sample Blog Title 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: 'March 19, 2024',
          authorName: 'John Doe',
          authorAvatar: '/path/to/avatar1.jpg',
        },
        {
          title: 'Sample Blog Title 2',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          date: 'March 20, 2024',
          authorName: 'Jane Smith',
          authorAvatar: '/path/to/avatar2.jpg',
        },
        // Add more blogs as needed
      ];
    
      const handleCardClick = () => {
        // Redirect to the full blog page
        // You can implement the redirection logic here
      };
    
      return (
        <Bounded >
               <div className="flex flex-wrap gap-4">
          {blogs.map((blog, index) => (
            <BlogPreviewCard
              key={index}
              blog={blog}
              onClick={handleCardClick}
            />
          ))}
          </div>
        </Bounded>
      );
    };
    
    export default BlogsPage;

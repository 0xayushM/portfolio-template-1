import Link from 'next/link'
import React from 'react'
import blogData from '../data/blogData.json'

const BlogButton = () => {
  return (
        <>
            {blogData.isBlog && (
                <div className='blog_button'>
                <Link href={blogData.link} target="_blank">
                    {blogData.name}
                </Link>
            </div>
            )}
        </>
  )
}

export default BlogButton

import React from 'react'
import Link from 'next/link'
import { GetDay, GetMonth } from 'helperFunctions/DateFun'
const BlogCard = ({item}) => {
  return (
    <div className="col-md-6 col-lg-4">
             
                <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                    <div className="post-item">
                        <div className="pbminfotech-blog-image-with-meta">
                            <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                              <Link href={`/blog/${item.slug}`}>  <picture><img src={item.coverImage} className="img-fluid" alt=""/></picture></Link>
                            </div>
                            {/* <div className="pbminfotech-meta-date">{new Date(item.date).toDateString()}</div> */}
                            <div className="pbminfotech-meta-date"><span>{GetMonth({ date: item.date })}</span>{GetDay({ date: item.date })}</div>
                     
                        </div>


                        <div className="pbmit-blog-meta pbmit-blog-meta-top d-flex justify-content-between">
                                            <span className="pbmit-meta pbmit-meta-date">
                                                <Link href={`/blog/category/${item.catSlug}`} rel="bookmark">
                                                    <span className="entry-date published">{item.category}</span>
                                                </Link>
                                            </span>
                                            <span className="pbmit-author-name">
                                                <span>By {item.author}</span>
                                                {/* <a href="blog-large-image.html" title="Posted by admin" rel="author">{item.author}</a> */}
                                            </span>
                                            {/* <span className="pbmit-meta pbmit-meta-comments">{dateFormatter(item.date)}</span> */}
                                        </div>


                        <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-title">
                                <h4><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                            </div>
                            <div className="pbmit-blogbox-readmore">
                                <div className="pbminfotech-blogbox-footer-left">
                                    <Link  href={`/blog/${item.slug}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
               
            </div>
  )
}

export default BlogCard

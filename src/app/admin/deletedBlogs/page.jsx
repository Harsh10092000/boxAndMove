import React from 'react'
import { getAllDeletedPosts } from '@/lib/api'
import Header from 'src/app/components/Header'
import Footer from 'src/app/components/Footer'
const page = () => {
    const posts = getAllDeletedPosts();
  return (
    <div>
      <Header />
      <div className="pb-3 pt-3">
      <div className="container">
      <div className="row"> 
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Slug</th>
                <th>Title</th>
                <th>Date</th>
                <th>Author</th>
                <th>Category</th>
                
              </tr>
            </thead>
            <tbody>
              {posts.map((item, index) => (
                <tr key={index}>
                  <td>{item.slug}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.author}</td>
                  <td>{item.category}</td>
                 
                 
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page

const Bookmarks = ({ item,time }) => {
  return (
    <div className="mx-3">
      <h2>Total Bookmarks: {time}</h2>
      {item.map(blog => (
        <div key={blog.id} className="border p-2 mb-2 rounded bg-gray-50">
          <p className="font-semibold">{blog.heading}</p>
          <small className="text-gray-600">✍️ {blog.author_name}</small>
        </div>
      ))}
    </div>
  )
}

export default Bookmarks

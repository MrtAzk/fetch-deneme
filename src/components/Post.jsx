import React from 'react'

const Post = ({ id, title, body }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-sm mb-3">
        {body}
      </p>
      <span className="text-xs text-gray-400">Post ID: {id}</span>
    </div>
  )
}

export default Post


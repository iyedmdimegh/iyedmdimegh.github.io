import React from 'react';

function Content() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Welcome to My React App</h2>
      <p className="mb-4">This is a basic React app styled with Tailwind CSS.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
          <p>This is a feature of our app.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
          <p>This is another feature of our app.</p>
        </div>
      </div>
    </main>
  );
}

export default Content;


import React from "react";

function Home() {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
      <div className="w-full grid grid-cols-6 gap-2 mt-5">
        <div>
          <label>Book Name</label>
          <input type="text" placeholder="Book Name" className="w-full border border-gray-100" />
        </div>

        <div>
          <label>Book Title</label>
          <input type="text" placeholder="Book Title" className="w-full border border-gray-100"/>
        </div>

        <div>
          <label>Author</label>
          <input type="text" placeholder="Author" className="w-full border border-gray-100"/>
        </div>

        <div>
          <label>Selling Price</label>
          <input type="text" placeholder="Selling Price" className="w-full border border-gray-100"/>
        </div>

        <div>
          <label>Publish Date</label>
          <input type="date" placeholder="Publish Date" className="w-full border border-gray-100"/>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer">Add Book</button>
      </div>
        <div className="w-full mt-10">
            <div className="w-full bg-gray-200 p-3 font-bold grid grid-cols-5 ">
                <table className="w-full divide-y divide-gray-20">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Name</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Title</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Selling Price</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Publish Date</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-200 ">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Book</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Book</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Book</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Book</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Book</td>
                        </tr>
                    </tbody>
                </table>
                </div>
        </div>
    </div>
  );
}

export default Home;

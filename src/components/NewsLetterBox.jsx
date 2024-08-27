import React from "react";

function NewsLetterBox() {
  function handeleSubmit(e) {
    console.log(e)
    e.prevenDefault();
  }
  return (
    <div className="text-center ">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      </p>
      <form
        onSubmit={(e)=>handeleSubmit(e)}
        className="w-full sm:w-1/2 flex border items-center gap-3 mx-auto my-6 pl-3"
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 uppercase"
        >
          subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
import React from "react";
function MyButton() {
  return (
    <button onClick={() => alert("Button clicked!")} className="px-4 py-2 bg-blue-500 text-white rounded">
      Click Me
    </button>
  );
}

export default MyButton;

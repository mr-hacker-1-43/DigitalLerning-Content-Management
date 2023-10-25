import React from 'react';

function TypingAnimation() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-xl text-gray-600">We offer amazing services.</p>
      <div className="animate-typing mt-4">
        <span className="text-blue-500">Web Development</span>
        <span className="mx-2">|</span>
        <span className="text-blue-500">Graphic Design</span>
        <span className="mx-2">|</span>
        <span className="text-blue-500">Digital Marketing</span>
        <div className="h-5 w-1 mx-2 inline-block animate-blink">|</div>
      </div>
    </div>
  );
}

export default TypingAnimation;

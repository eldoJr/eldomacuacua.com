import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <title>Animated E</title>
  <g>
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-5; 0,0; 0,5; 0,0"
        dur="2s"
        repeatCount="indefinite"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 50 50; 3 50 50; -3 50 50; 0 50 50"
        dur="2s"
        repeatCount="indefinite"
        additive="sum"
      />
    </g>
    <line
      x1="30"
      y1="30"
      x2="70"
      y2="30"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeDasharray="40"
      strokeDashoffset="40"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="40"
        to="0"
        dur="0.5s"
        begin="0s"
        fill="freeze"
      />
    </line>
    <line
      x1="30"
      y1="50"
      x2="60"
      y2="50"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeDasharray="30"
      strokeDashoffset="30"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="30"
        to="0"
        dur="0.5s"
        begin="0.6s"
        fill="freeze"
      />
    </line>
    <line
      x1="30"
      y1="70"
      x2="70"
      y2="70"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeDasharray="40"
      strokeDashoffset="40"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="40"
        to="0"
        dur="0.5s"
        begin="1.2s"
        fill="freeze"
      />
    </line>
  </g>
</svg>

);

export default IconLoader;
import React from 'react';

// Compare this snippet from 1-rendering/1.1-jsx/Jsx.tsx
export const Page = () => {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement('header', null, 'BigChange'),
    /*#__PURE__*/ React.createElement(
      'main',
      {
        className: true ? 'main' : 'main-article'
      },
      'We are unstoppable'
    )
  );
};

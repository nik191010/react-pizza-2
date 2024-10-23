import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={284}
    height={430}
    viewBox="0 0 284 430"
    backgroundColor="#f2eeee"
    foregroundColor="#4a4a4a">
    <circle cx="148" cy="116" r="116" />
    <rect x="0" y="254" rx="10" ry="10" width="284" height="23" />
    <rect x="0" y="289" rx="10" ry="10" width="284" height="32" />
    <rect x="0" y="361" rx="10" ry="10" width="75" height="40" />
    <rect x="214" y="372" rx="10" ry="10" width="69" height="23" />
  </ContentLoader>
);

export default Skeleton;

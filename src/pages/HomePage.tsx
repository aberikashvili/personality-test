import React, { useContext, useEffect } from 'react';
import BreadcumbsContext from '../store/breadcrumbs.context';

const HomePage: React.FC = () => {
  const breadcrumbsCtx = useContext(BreadcumbsContext);

  useEffect(() => {
    breadcrumbsCtx.setBreadcrumbs(['Home']);
  }, []);

  return <p>This is home page</p>;
};

export default HomePage;

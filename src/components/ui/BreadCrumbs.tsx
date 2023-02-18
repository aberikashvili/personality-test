import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import BreadcumbsContext from '../../store/breadcrumbs.context';

const BreadCrumbs: React.FC = () => {
  const breadcrumbsCtx = useContext(BreadcumbsContext);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbsCtx.breadcrumbs.map((breadcrumb) => (
        <Breadcrumb.Item key={breadcrumb}>{breadcrumb}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbs;

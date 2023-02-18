import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import BreadcumbsContext from '../store/breadcrumbs.context';
import TestsContext from '../store/tests.context';
import TestItem from '../components/Tests/TestItem';

const TestsPage: React.FC = () => {
  const navigate = useNavigate();
  const breadcrumbsCtx = useContext(BreadcumbsContext);
  const { tests } = useContext(TestsContext);

  useEffect(() => {
    breadcrumbsCtx.setBreadcrumbs(['Tests']);
  }, []);

  const handleClick = (testId: number) => {
    navigate(`/tests/${testId}`);
  };

  return (
    <Space direction="horizontal" size="middle">
      {!tests.length && <p>No tests in database.</p>}
      {tests.map((test) => (
        <TestItem
          key={test.id}
          id={test.id}
          title={test.title}
          caption={test.caption}
          coverImageUri={test.coverImageUri}
          onClick={handleClick}
        />
      ))}
    </Space>
  );
};

export default TestsPage;

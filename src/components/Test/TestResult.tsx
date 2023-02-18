import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const TestResult = ({ result }: { result: string | null }) => {
  const navigate = useNavigate();

  return (
    <Result
      icon={<SmileOutlined />}
      title={`Great, you finished the test! - According to testb results, you are ${result} person`}
      extra={
        <Button type="primary" onClick={() => navigate('/tests')}>
          Go to Tests page
        </Button>
      }
    />
  );
};

export default TestResult;

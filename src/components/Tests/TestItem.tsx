import React from 'react';
import { Card } from 'antd';

const TestItem: React.FC = ({
  id,
  title,
  caption,
  coverImageUri,
  onClick
}: {
  id: number;
  title: string;
  caption: string;
  coverImageUri: string;
  onClick: (id: number) => void;
}) => {
  return (
    <Card
      title={title}
      size="small"
      hoverable
      cover={<img src={coverImageUri} style={{ height: '300px', border: '1px solid #eee' }} />}
      onClick={onClick.bind(this, id)}>
      <p>{caption}</p>
    </Card>
  );
};

export default TestItem;

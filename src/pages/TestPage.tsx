import React, { useEffect, useContext, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Menu, Result, Space, Steps, theme } from 'antd';

import './TestPage.scss';
import BreadcumbsContext from '../store/breadcrumbs.context';
import TestsContext from '../store/tests.context';
import Answer from '../models/Answer';
import Question from '../models/Question';
import Spinner from '../components/ui/Spinner';
import Test from '../models/Test';
import TestResult from '../components/Test/TestResult';

const TestPage: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return <p>No such test in database</p>;
  }

  const { token } = theme.useToken();

  const { getTestById } = useContext(TestsContext);
  const breadcrumbsCtx = useContext(BreadcumbsContext);

  const [currentTest, setCurrentTest] = useState<Test>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  const calculateResult = useCallback(() => {
    const hash: { [key: string]: number } = {};

    userAnswers.forEach(({ type }) => {
      if (!hash[type]) {
        hash[type] = 1;
      }

      hash[type]++;
    });

    let max = -1;
    Object.values(hash).forEach((val) => {
      if (val > max) {
        max = val;
      }
    });

    let result = null;
    Object.keys(hash).forEach((key) => {
      if (hash[key] === max) {
        result = key;
      }
    });

    return result;
  }, [userAnswers]);

  const handleNext = () => {
    if (!selectedAnswer) {
      alert('pick answer');
      return;
    }

    setUserAnswers((currentState) => [...currentState, selectedAnswer]);
    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
  };

  const getQuestionByIndex = useCallback(
    (index: number) => {
      if (!currentTest) {
        return {} as Question;
      }

      return currentTest.questions[index];
    },
    [currentTest]
  );

  useEffect(() => {
    const selectedTest = getTestById(+id);
    setCurrentTest(selectedTest);
  }, []);

  useEffect(() => {
    if (!!currentTest) {
      breadcrumbsCtx.setBreadcrumbs(['Tests', currentTest.title]);
    }
  }, [currentTest]);

  useEffect(() => {
    setSelectedAnswer(undefined);
  }, [currentQuestionIndex]);

  if (!currentTest) {
    return <Spinner />;
  }

  return (
    <Space direction="horizontal" size="middle" className="TestPage__Space">
      <Steps
        current={currentQuestionIndex}
        percent={(currentQuestionIndex * 100) / currentTest.questions.length}
        items={currentTest.questions.map(() => ({}))}
      />
      {currentQuestionIndex < currentTest.questions.length && (
        <div
          className="TestPage__Content"
          style={{
            color: token.colorTextTertiary,
            backgroundColor: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: `1px dashed ${token.colorBorder}`
          }}>
          <h2>{getQuestionByIndex(currentQuestionIndex).question}</h2>
          <Menu
            theme="light"
            mode="vertical"
            items={getQuestionByIndex(currentQuestionIndex).answers.map((answer) => ({
              key: answer.id,
              label: answer.answer,
              onClick: () => setSelectedAnswer(answer)
            }))}
          />
          <Button
            type="primary"
            onClick={handleNext}
            disabled={!selectedAnswer}
            block={!selectedAnswer}>
            Next
          </Button>
        </div>
      )}
      {currentQuestionIndex >= currentTest.questions.length && (
        <TestResult result={calculateResult()} />
      )}
    </Space>
  );
};

export default TestPage;

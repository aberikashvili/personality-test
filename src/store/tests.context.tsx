import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Test from '../models/Test';

const TestsContext = createContext({
  tests: [] as Test[],
  getTestById: (id: number) => ({} as Test)
});

export const TestsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [testsData, setTestsData] = useState<Test[]>([]);

  const getTestById = (id: number): Test | undefined => {
    return testsData.find((test) => test.id === id);
  };

  useEffect(() => {
    axios.get('/data/dummy-data.json').then((respose) => {
      setTestsData(respose.data.tests);
    });
  }, []);

  const context = {
    tests: testsData,
    getTestById
  };

  return <TestsContext.Provider value={context}>{children}</TestsContext.Provider>;
};

export default TestsContext;

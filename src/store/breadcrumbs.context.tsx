import React, { createContext, useState } from 'react';

const BreadcumbsContext = createContext({
  breadcrumbs: [] as string[],
  setBreadcrumbs: (breadcrumbs: string[]) => {}
});

export const BreadcrumbsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [breadcrumbsData, setBreadcrumbsData] = useState<string[]>([]);

  const setBreadcrumbs = (breadcrumbs: string[]) => {
    setBreadcrumbsData(breadcrumbs);
  };

  const context = {
    breadcrumbs: breadcrumbsData,
    setBreadcrumbs
  };

  return <BreadcumbsContext.Provider value={context}>{children}</BreadcumbsContext.Provider>;
};

export default BreadcumbsContext;

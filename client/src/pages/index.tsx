import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// Create a client
const queryClient = new QueryClient();

interface IIndexProps {}

const Index: React.FC<IIndexProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default Index;

import { Suspense } from "react";
import useSWR from 'swr';

function App() {
  const { data } = useSWR('/api/test');
  return (
    <>
      <h1>Playground</h1>
      <p>Message: {data?.message}</p>
    </>
  );
}

export default App;

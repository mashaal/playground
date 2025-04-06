import { Suspense } from "react";
import useSWR from 'swr';

function App() {
  const { data } = useSWR('/api/test', { suspense: true });
  return (
    <>
      <h1>Internot</h1>
      <p>Message: {data?.message}</p>
    </>
  );
}

export default App;

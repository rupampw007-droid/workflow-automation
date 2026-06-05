import { HydrateClient, prefetch, trpc } from '@/app/trpc/server';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {Client} from './client'
 
export default async function Home() {
  await prefetch(trpc.getUsers.queryOptions());
 
  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client/>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
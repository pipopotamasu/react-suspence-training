import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import UserList from './UserList';
import PostList from './PostList';
import '@/assets/App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <ErrorBoundary>
          <Suspense fallback="loading...">
            <UserList />
            <PostList />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;

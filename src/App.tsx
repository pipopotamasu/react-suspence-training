import { Suspense } from 'react';
import UserList from './UserList';
import PostList from './PostList';
import '@/assets/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback="loading...">
          <UserList />
          <PostList />
        </Suspense>
      </header>
    </div>
  );
}

export default App;

import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '@/assets/App.css';

const UserList = lazy(() => import('./UserList'));
const PostList = lazy(() => import('./PostList'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </Suspense>
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/users">Users</Link>
          <span> | </span>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;

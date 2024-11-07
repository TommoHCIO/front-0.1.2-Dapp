import React from 'react';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';
import TrendingTopics from '../components/TrendingTopics';

function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <main className="lg:col-span-8">
        <CreatePost />
        <div className="mt-4">
          <Feed />
        </div>
      </main>
      <aside className="lg:col-span-4">
        <div className="sticky top-20">
          <TrendingTopics />
        </div>
      </aside>
    </div>
  );
}

export default Home;
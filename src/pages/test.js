import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Hello, World! This is a test page. You can find the file at{' '}
          <code>src/pages/test.js</code>.
        </p>
      </div>
    </Layout>
  );
}
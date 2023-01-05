import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { PostViewProps } from './types';

export default function PostView(props: PostViewProps) {
  const { content } = props;
  return (
    <div className='container'>
      <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}

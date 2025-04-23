import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './MarkdownRenderer.module.css';

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className={`${styles.markdown} ${styles.markdownBlock}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

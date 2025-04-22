'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkdownWrapper = styled.div`
  &.markdown {
    h1, h2 {
      @apply font-semibold text-title text-white leading-[22px] md:leading-[28px] pb-10;
    }

    h3, h4, h5, h6 {
      @apply text-title pb-3 text-white;
    }

    p {
      @apply text-base text-main-gray pb-2 max-sm:pb-2 font-extralight;
    }

    p:last-child {
      padding-bottom: 0;
    }

    a {
      @apply text-main-yellow underline;
    }

    ul, ol {
      @apply list-inside text-white list-disc pl-5 mb-5;
    }

    li {
      @apply mb-2;
    }

    strong, b {
      @apply font-semibold text-main-yellow;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    th {
      background: linear-gradient(135deg, #457b9d, #1d3557);
      color: white;
      font-weight: bold;
    }

    tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.05);
    }

    tr:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const MarkdownRenderer = ({ content }) => {
  return (
    <MarkdownWrapper className="markdown markdown-b">
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkdownWrapper>
  );
};

export default MarkdownRenderer;

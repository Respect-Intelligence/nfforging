"use client";

import React from "react";

function Content({ content }: { content: string | undefined }) {
  return (
    <>
      {content && (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog__desc"
        />
      )}
    </>
  );
}

export default Content;

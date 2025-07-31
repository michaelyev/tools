import React from "react";
import { authOptions } from "app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import ProjectsClient from "@component/Orders/Projects";
import MarkdownRenderer from "@component/markdown/MarkdonwnRenderer";
import { fetchProjectPage } from "@utils/data_fetch/fetchProjectPage";
import ServerContainer from "@component/ServerContainer/ServerContainer";

const Page = async ({ params }: { params: Promise<{ location?: string[] }> }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user || null;

  const resolvedParams = await params;
  const [state, city, category] = resolvedParams.location || [];

  let pageData = null;

  if (state && city) {
    pageData = await fetchProjectPage(state, city, category);
  }

  return (
    <main>
      <ProjectsClient 
        location={state && city ? [state, city] : undefined} 
        initialCategory={category || undefined} 
        user={user} 
      />

      {pageData && (
        <ServerContainer>
          <MarkdownRenderer content={pageData.markdown} />
        </ServerContainer>
      )}
    </main>
  );
};

export default Page;

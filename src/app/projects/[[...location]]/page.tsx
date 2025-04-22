import React from "react";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { fetchAllProjects } from "@utils/data_fetch/projectFetch";
import { getServerSession } from "next-auth";
import ProjectsClient from "@component/Orders/Projects";
import MarkdownRenderer from "@component/markdown/MarkdonwnRenderer";
import { fetchProjectPage } from "@utils/data_fetch/fetchProjectPage";
import Container from "@component/Container";

const page = async ({ params }: { params: { location: string[] } }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user || null;

  const [state, city, category] = params.location;
  const pageData = await fetchProjectPage(state, city, category);

  return (
    <main>
      <ProjectsClient 
        location={[state, city]} 
        initialCategory={category} 
        user={user} 
      />
      <Container>
      <MarkdownRenderer content={pageData.markdown}/>

      </Container>
    </main>
  );
};

export default page;

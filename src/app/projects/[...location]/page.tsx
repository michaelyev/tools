 import React from "react";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { fetchAllProjects } from "@utils/data_fetch/projectFetch";
import { getServerSession } from "next-auth";
import ProjectsClient from "@component/Orders/Projects";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user || null;
  const projects = await fetchAllProjects();

  return (
    <main>
      {" "}
      <ProjectsClient user={user} projects={projects} />
    </main>
  );
};

export default page;

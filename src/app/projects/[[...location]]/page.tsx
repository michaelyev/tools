 import React from "react";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { fetchAllProjects } from "@utils/data_fetch/projectFetch";
import { getServerSession } from "next-auth";
import ProjectsClient from "@component/Orders/Projects";


const page = async ({ params }: { params: { location: string[] } }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user || null;
  const projects = await fetchAllProjects();

/*   console.log(params.location)
 */  return (
    <main>
      {/* <h1>${category} projects in ${city}</h1> */}
      <ProjectsClient location={params.location} user={user} projects={projects} />
    </main>
  );
};

export default page;

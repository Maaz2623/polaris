import React from "react";

const ProjectidPage = async ({
  params,
}: {
  params: Promise<{
    projectId: string;
  }>;
}) => {
  const { projectId } = await params;

  return <div>{projectId}</div>;
};

export default ProjectidPage;

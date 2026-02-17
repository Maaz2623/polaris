"use client";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const projects = useQuery(api.projects.get);

  const createProject = useMutation(api.projects.create);

  return (
    <div>
      <Button
        onClick={() =>
          createProject({
            name: "New Project",
          })
        }
      >
        Add new
      </Button>
      {projects?.map((project) => (
        <div>{project._id}</div>
      ))}
    </div>
  );
};

export default HomePage;

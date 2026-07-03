import jobs from "../data/jobs";

export const getJobs = () => {
  return jobs;
};

export const getFeaturedJobs = () => {
  return jobs.filter((job) => job.featured);
};

export const getJobById = (id) => {
  return jobs.find((job) => job.id === Number(id));
};
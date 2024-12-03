export const processSummaries = (summaries) => {
  return summaries
    .split("\n") 
    .map((line) => line.trim()) 
    .filter((line) => line.length > 0) 
    .map((line) => line.replace(/^[-*]\s*/, ""));
};

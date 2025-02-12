import { createContext, useContext, useMemo, useState } from "react";
import { usePolicies } from "../services/usePolicy";
import Spinner from "../ui/Spinner";

const PostContext = createContext();

function PostProvider({ children }) {
  const { data = [], isLoading } = usePolicies();
  const posts = Array.isArray(data) ? data : data?.policies || data?.data || [];

  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0 && posts
      ? posts.filter((post) =>
          `${post?.id || ""} ${post?.no || ""} ${post?.status || ""} ${
            post?.heading || ""
          } ${post?.description || ""} ${post?.users?.toString() || ""}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts || [];

  const value = useMemo(() => {
    return {
      searchedPosts,
      searchQuery,
      setSearchQuery,
      isLoading,
    };
  }, [searchedPosts, searchQuery]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };

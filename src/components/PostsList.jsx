import { useContext } from "react";
import PostCard from "./PostCard";
import GlobalContext from "../contexts/GlobalContext";

export default function PostsList() {

    const { posts } = useContext(GlobalContext);

    return (
        <div>
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    );
}
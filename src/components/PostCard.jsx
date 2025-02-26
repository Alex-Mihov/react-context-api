import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostCard(props) {

    const { post } = props;

    return (
        <>
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={post.image} className="card-img-top" alt={post.title}></img>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.content}</p>
                        <p className="card-text"><small className="text-body-secondary">{post.tags.join(", ")}</small></p>
                    </div>
                </div>
            </div>


        </>
    )

}
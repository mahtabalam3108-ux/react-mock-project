import { useFetch } from "./UseFetch";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const ListCustomHook = () => {
    const {data, loading, error, refetch} = useFetch<Post[]>( "https://jsonplaceholder.typicode.com/posts" );

    if (loading) return <p>loading....</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <>
            <p>
                <button type='button' onClick={refetch}>Refresh</button>
            </p>

            <ul>
                {data?.map((record) => (
                    <li key={record.id}>{record.title}</li>
                ))}
            </ul>
        </>
    )
}

export default ListCustomHook
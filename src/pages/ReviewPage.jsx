import {useParams} from "react-router";
import {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import reviewIndex from './reviews/index.json';

//todo: Actually style this page.
//todo: Give it a proper header section, style the review section...

export default function ReviewPage() {
    const {reviewName} = useParams();
    const [content, setContent] = useState('');
    const [error, setError] = useState(false);

    // Get metadata from the pre-generated index (no parsing needed!)
    const metadata = reviewIndex.find(r => r.slug === reviewName);

    useEffect(() => {
        // Just import the raw markdown content
        import(`./reviews/${reviewName}.md?raw`)
            .then(module => {
                // Strip out the frontmatter (everything before the second ---)
                const contentWithoutFrontmatter = module.default.replace(/^---[\s\S]*?---\n/, '');
                setContent(contentWithoutFrontmatter);
                setError(false);
            })
            .catch(err => {
                console.error('Review not found', err);
                setError(true);
            });
    }, [reviewName]);

    if (error || !metadata) {
        return <div className="p-8">Review not found</div>;
    }

    if (!content) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Display metadata */}
            {metadata && (
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
                    <p className="text-gray-600">{metadata.date}</p>
                    {metadata.rating && <p>Rating: {metadata.rating}/5</p>}
                </div>
            )}

            {/* Render the markdown content */}
            <ReactMarkdown
                components={{
                    h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mt-8 mb-3" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-6 mb-2" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                    a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                    img: ({node, ...props}) => <img className="rounded-lg my-6 w-full" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
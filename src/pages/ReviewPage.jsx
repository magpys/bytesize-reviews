import {useParams} from "react-router";
import {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import reviewIndex from './reviews/index.json';
import {Calendar, Star, User} from "lucide-react";

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
        <>
            {metadata && (
                <section className="bg-black text-white">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-5xl font-bold mt-3 mb-4 leading-tight">{metadata.title}</h2>
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                                    <span className="flex items-center gap-1">
                                        <User size={14}/>
                                        {metadata.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14}/>
                                        {new Date(metadata.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                            </span>
                                </div>
                                <p className="text-gray-300 text-lg mb-6">{metadata.snippet}</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={20}
                                                className={i < Math.floor(metadata.rating) ? "fill-orange-500 text-orange-500" : "text-gray-600"}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-2xl font-bold text-orange-500">{metadata.rating}/5</span>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={metadata.image}
                                    alt={metadata.game}
                                    className="w-full h-96 object-cover border-4 border-orange-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Render the markdown content */}
            <div className="max-w-3xl mx-auto px-4 pb-8 pt-16">
                <ReactMarkdown
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mt-8 mb-3" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-6 mb-2" {...props} />,
                        p: ({node, ...props}) => <p className="text-xl mb-6 leading-relaxed" {...props} />,
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
            <div className="max-w-3xl mx-auto px-4 pb-8">
                <div className="flex items-center gap-8">
                    <span className="text-4xl font-bold">{metadata.rating}/5</span>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={40}
                                className={i < Math.floor(metadata.rating) ? "fill-orange-500 text-orange-500" : "text-gray-600"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
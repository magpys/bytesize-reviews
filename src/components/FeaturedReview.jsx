import {Star, Calendar, User} from 'lucide-react';

export function FeaturedReview({review}) {
    return (
        <section className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="text-orange-500 text-sm font-bold tracking-wide">FEATURED REVIEW</span>
                        <h2 className="text-5xl font-bold mt-3 mb-4 leading-tight">{review.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                            <span className="flex items-center gap-1">
                                <User size={14}/>
                                {review.author}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar size={14}/>
                                {review.date.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                        <p className="text-gray-300 text-lg mb-6">{review.snippet}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        className={i < Math.floor(review.rating) ? "fill-orange-500 text-orange-500" : "text-gray-600"}
                                    />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-orange-500">{review.rating}/5</span>
                        </div>
                        <button
                            className="mt-6 bg-orange-500 text-black font-bold px-8 py-3 hover:bg-orange-400 transition-colors">
                            READ FULL REVIEW
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src={review.image}
                            alt={review.game}
                            className="w-full h-96 object-cover border-4 border-orange-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
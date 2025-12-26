import React from "react";
import {FeaturedReview} from "../components/FeaturedReview.jsx";
import {Star, User, Calendar} from "lucide-react";
import {reviews} from "./reviews/reviews-meta.js";

const categories = ['all', 'RPG', 'Platformer', 'Fighting', 'Roguelike'];

export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const filteredReviews = selectedCategory === 'all'
        ? reviews
        : reviews.filter(r => r.category === selectedCategory);

    return (
        <>
            <FeaturedReview review={reviews[0]}/>
            {/* Category Filter */}
            <section className="border-b-2 border-black">

                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex gap-6">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-sm font-bold tracking-wide uppercase transition-colors ${
                                    selectedCategory === cat
                                        ? 'text-orange-500 border-b-2 border-orange-500'
                                        : 'text-black hover:text-orange-500'
                                } pb-1`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h3 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">LATEST REVIEWS</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredReviews.slice(1).map(review => (
                        <article key={review.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-4">
                                <img
                                    src={review.image}
                                    alt={review.game}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-xs font-bold">
                                    {review.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < Math.floor(review.rating) ? "fill-orange-500 text-orange-500" : "text-gray-300"}
                                    />
                                ))}
                                <span className="ml-2 font-bold text-orange-500">{review.rating}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                                {review.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3">{review.snippet}</p>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <User size={12}/>
                                    {review.author}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={12}/>
                                    {review.date.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
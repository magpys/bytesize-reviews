import {Header} from "./components/Header.jsx";
import {FeaturedReview} from "./components/FeaturedReview.jsx";
import React from "react";
import {Footer} from "./components/Footer.jsx";
import {Star, Calendar, User} from 'lucide-react';

const reviews = [
    {
        id: 1,
        title: "Starfield: Beyond the Cosmos",
        game: "Starfield",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=450&fit=crop",
        rating: 4.5,
        category: "RPG",
        author: "Alex Chen",
        date: "Dec 15, 2025",
        snippet: "Bethesda's space epic delivers on scale and exploration, though it occasionally loses itself among the stars. A must-play for sci-fi fans."
    },
    {
        id: 2,
        title: "Hollow Knight: Silksong Review",
        game: "Silksong",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
        rating: 5,
        category: "Platformer",
        author: "Jordan Miles",
        date: "Dec 14, 2025",
        snippet: "Team Cherry returns with a masterpiece. Silksong refines everything that made Hollow Knight special while carving its own identity."
    },
    {
        id: 3,
        title: "Street Fighter 6: The Fight Continues",
        game: "Street Fighter 6",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
        rating: 4,
        category: "Fighting",
        author: "Sam Rivera",
        date: "Dec 13, 2025",
        snippet: "Capcom delivers a technical knockout with accessible mechanics and deep systems. The World Tour mode is a surprising highlight."
    },
    {
        id: 4,
        title: "Cyberpunk 2077: Phantom Liberty",
        game: "Phantom Liberty",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
        rating: 4.5,
        category: "RPG",
        author: "Alex Chen",
        date: "Dec 12, 2025",
        snippet: "CD Projekt Red's redemption arc complete. This expansion shows Night City at its absolute best with gripping espionage storytelling."
    }
];

const categories = ['all', 'RPG', 'Platformer', 'Fighting'];

function App() {
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const filteredReviews = selectedCategory === 'all'
        ? reviews
        : reviews.filter(r => r.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            <Header/>
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
                                    {review.date}
                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default App

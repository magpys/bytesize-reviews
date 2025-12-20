import React from "react";

export default function AboutPage() {
    // todo: This page needs a section to introduce the reviewers
    // todo: This page needs the introduction sprucing up a bit. For example, why reviews in less than 255 words?

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <h3 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">WELCOME TO BYTESIZE REVIEWS</h3>
            <p className="text-gray-600 text-md mb-3">
                Welcome to Bytesize reviews! Featuring game reviews that get to the point in 255 words or less.
            </p>
            <p className="text-gray-600 text-md mb-3">
                Written for people that live in a busy world but demand quality and honesty in their reviews.
            </p>
        </section>
    )
}
import React from "react";

export function Footer() {
    return (
        <footer className="bg-black text-white mt-16">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold">Bytesize Reviews</h3>
                        <p className="text-gray-400 text-sm mt-1">© 2025 All rights reserved</p>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
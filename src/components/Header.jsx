export function Header() {
    return (
        <header className="bg-black text-white border-b-4 border-orange-500">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Bytesize Reviews</h1>
                        <p className="text-gray-400 text-sm mt-1">Gaming reviews in 255 words or fewer!</p>
                    </div>
                    <nav className="flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-orange-500 transition-colors">REVIEWS</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">LATEST</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">ABOUT</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
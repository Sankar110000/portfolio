export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-sm">
            Passionate developer crafting clean, user-friendly, and performant web experiences. Always learning, always building.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#home" className="hover:text-sky-500 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-sky-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-sky-500 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <ul className="text-sm space-y-1">
            <li><a href="mailto:youremail@example.com" className="hover:text-sky-500 transition">youremail@example.com</a></li>
            <li><a href="https://github.com/yourusername" target="_blank" className="hover:text-sky-500 transition">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-sky-500 transition">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}

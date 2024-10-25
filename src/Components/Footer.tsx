import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-6 px-4 fixed left-0 w-full bottom-0">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold">Agshin's Projects</h2>
                    <ul className="flex space-x-4 mt-2">
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="mb-4 md:mb-0 flex space-x-4">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-right">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Agshin Mustafazade</p>
                    <p className="text-sm">Built with passion and modern web tech</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <BookOpen size={28} className="text-primary mr-2" />
              <span className="text-xl font-display font-bold">BaliLore</span>
            </div>
            <p className="font-body text-gray-300 mb-4">
              Sharing the untold stories and rich cultural heritage of Bali through the voices of locals and visitors.
            </p>
            <div className="flex space-x-4 mt-2">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Mail size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/stories">Stories</FooterLink>
              <FooterLink to="/submit">Submit</FooterLink>
              <FooterLink to="/about">About</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 font-semibold">Subscribe</h3>
            <p className="font-body text-gray-300 mb-4">
              Join our newsletter to receive the latest stories and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-accent"
              />
              <button className="bg-primary px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BaliLore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-primary transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-300 hover:text-primary transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
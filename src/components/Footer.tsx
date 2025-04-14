import { Twitter, SendHorizontal, MessageCircle, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <span className="font-bold text-2xl uppercase">Yo<span className="text-yopips-yellow">Pips</span></span>
            </div>
            <p className="text-white/70 mb-4">
              Automated cryptocurrency trading platform with fixed 1% daily returns and full MT5 transparency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-yopips-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-yopips-yellow transition-colors">
                <SendHorizontal size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-yopips-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/mt5" className="text-white/70 hover:text-yopips-yellow transition-colors">Trade with MT5</Link>
              </li>
              <li>
                <Link to="/calculator" className="text-white/70 hover:text-yopips-yellow transition-colors">Profit Calculator</Link>
              </li>
              <li>
                <Link to="/transparency" className="text-white/70 hover:text-yopips-yellow transition-colors">Transparency</Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-white/70 hover:text-yopips-yellow transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-white/70 hover:text-yopips-yellow transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/TremsOfService" className="text-white/70 hover:text-yopips-yellow transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="text-white/70 hover:text-yopips-yellow transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h4 className="font-bold text-lg mb-4">Trust & Security</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-yopips-yellow mr-2" />
                <span className="text-white/70">SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-yopips-yellow mr-2" />
                <span className="text-white/70">MT5 Verified</span>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Need Help?</h5>
                <p className="text-white/70 text-sm mb-3">
                  Our support team is available 24/7 to assist you.
                </p>
                <div className="flex">
                  <Link to="/contact-us" className="text-yopips-yellow hover:underline text-sm">
                    Contact Support →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-muted mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} YoPips. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/TremsOfService" className="text-white/60 hover:text-yopips-yellow text-sm transition-colors">
              Terms
            </Link>
            <Link to="/privacypolicy" className="text-white/60 hover:text-yopips-yellow text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/cookiespolicy" className="text-white/60 hover:text-yopips-yellow text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaMoon,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#0F1219] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600/80 to-indigo-600/80 flex items-center justify-center shadow-lg">
                  <FaMoon className="text-white text-sm" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
                  Tasker
                </span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                The ultimate task management solution for individuals and teams
                looking to boost productivity.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Testimonials", "FAQ"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {["Blog", "Documentation", "Changelog", "Help Center"].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1 mt-8 md:mt-0">
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                  {[
                    { icon: <FaGithub size={18} />, href: "#" },
                    { icon: <FaTwitter size={18} />, href: "#" },
                    { icon: <FaLinkedin size={18} />, href: "#" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="h-9 w-9 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 transition-all duration-300 border border-white/10"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Tasker. All rights reserved.
            </p>

            <p className="text-gray-400 flex items-center">
              Made with <FaHeart className="mx-1 text-red-500 animate-pulse" />{" "}
              by
              <span className="ml-1 font-medium text-white">Joy Tarafder</span>
            </p>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              {["Privacy", "Terms", "Cookies"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

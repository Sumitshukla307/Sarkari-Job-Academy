import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="bg-gray-800 text-white py-8 sm:block hidden">
        <div class="container mx-auto px-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 class="text-lg font-bold mb-4">Sarkari Job Academy</h4>
              <p>
                Pratik Tower Satna Road, Near Sarkari Collage Amarpatan District
                Satna(M.P.)
              </p>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <Link to="/" class="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" class="hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
<<<<<<< HEAD
                  <Link to="/" class="hover:text-gray-300">
=======
                  <Link to="/service" class="hover:text-gray-300">
>>>>>>> bdc0a99a33e8b94dd99f7b088d78f39c13321cbc
                    service
                  </Link>
                </li>
                <li>
<<<<<<< HEAD
                  <Link to="/" class="hover:text-gray-300">
=======
                  <Link to="/contact" class="hover:text-gray-300">
>>>>>>> bdc0a99a33e8b94dd99f7b088d78f39c13321cbc
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Contact Us</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="hover:text-gray-300">
                    sarkari_job_Academy@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-300">
                    +91-8815645151
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-gray-300">
                    +91-8889783242
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a
                  href="https://www.facebook.com/sarkarijobacademy?mibextid=ZbWKwL"
                  class="hover:text-blue-400"
                >
                  <CiFacebook className="size-8" />
                </a>
                <a
                  href="https://www.instagram.com/sarkarijobacademy?igsh=MTdrZjc0bTViZ3VhNA=="
                  class="hover:text-blue-400"
                >
                  <FaInstagram className="size-8" />
                </a>
                <a
                  href="https://www.youtube.com/@SARKARIJOBACADEMY"
                  class="hover:text-pink-500"
                >
                  <TiSocialYoutubeCircular className="size-8" />
                </a>
              </div>
            </div>
          </div>
          <div class="text-center mt-8">
            <p>© 2023 Sarkari Job Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">
      <Container>
        <div className="grid md:grid-cols-5 gap-8 container mx-auto">
          <div>
            <h3 className="text-white font-semibold mb-2">
              PH -- Assainment System
            </h3>
            <p className="text-sm">
              PH Assainment System is a platform that centralizes,tracks,and
              manage requests or issues converting them into unique 'Assainment
              s'for efficient resulation and communication.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">University</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contract Adminstator</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Service</h4>
            <ul className="space-y-1 text-sm">
              <li>Education & Services</li>
              <li>Student Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Informations</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social links</h4>
            <ul className="space-y-1 text-sm">
              <li>@facebook</li>
              <li>@instagram</li>
              <li>@linkedIn</li>
              <li>@support-team</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          @Assainment PH.
          <br className="block md:hidden" />
          All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

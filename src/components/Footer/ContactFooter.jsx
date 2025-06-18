import React from "react";

const ContactFooter = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Telepon</h3>
          <a
            href="tel:+6283182719413"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            +62 831-8271-9413
          </a>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Email</h3>
          <a
            href="mailto:adyfasofice@gmail.com"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            adyfasofice@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;

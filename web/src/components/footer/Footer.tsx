import React from 'react';

import './_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-div">
        <p className="copyright">© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

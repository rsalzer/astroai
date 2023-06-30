import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" rel="noopener noreferrer" className="footer-link">
        Home
      </Link>
      <Link href="/legal" rel="noopener noreferrer" className="footer-link">
        Impressum
      </Link>
      <Link href="/about" rel="noopener noreferrer" className="footer-link">
        About
      </Link>
      <style jsx global>{`
        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footer-link {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
          margin-left: 10px;
        }
      `}</style>
    </footer>
  );
}

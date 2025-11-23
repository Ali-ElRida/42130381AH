import React from 'react'
import full from "../assets/full.png"
import cedrus from "../assets/cedrus.png"

function Footer() {
  return (
    <footer className="bg-[#438cb5] text-white py-4 mt-10 font-serif text-sm">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Passport Application System. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
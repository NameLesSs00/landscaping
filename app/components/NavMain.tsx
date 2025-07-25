"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function NavMain() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-around bg-transparent z-20 border-b border-white p-4">

      <section>
        <p className='font-semibold text-[38px] '>EcoSculpt</p> 
      </section>
      <section className=' flex justify-between items-center'>
        <p>Home</p>
        <p className=' mx-5'>About Us</p>
        <div ref={dropdownRef}>
          <div onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
            Pages
          </div>

          {open && (
            <div>
              <Link href="/page1">Page 1</Link>
              <Link href="/page2">Page 2</Link>
              <Link href="/page3">Page 3</Link>
            </div>
          )}
        </div>
      </section>
      <section className=' flex justify-between'>
        <button className=' mr-5' >Login</button>
        <button>Sign up</button>
      </section>
    </div>
  )
}

export default NavMain
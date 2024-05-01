"use client"

import {useState} from 'react'
import {InView} from 'react-intersection-observer';

export default function Home() {
  let [showStickyHeader, setShowStickyHeader] = useState(false)


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InView
        as  ="header"
        className="min-w-full p-5"
        onChange={(inView) => {
          console.log('InView onChange called!!!')
          setShowStickyHeader(!inView)
        }}
      >
      <div>Regular header here! Scroll to show the sticky header!</div>
        <div className={`${showStickyHeader ? 'flex' : 'hidden'} fixed bg-white top-0 left-0 right-0 p-5`}>
        {/* @ts-ignore */}
          <marquee>I should only show when the header above is out of view!</marquee>
        </div>
      </InView>
      <div className="min-h-[600vh]">Scroll down!</div>
    </main>
  );
}

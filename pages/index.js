import { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LOGO from '../public/logo.svg'
import Image from 'next/image'

export default function Home() {
  const ref = useRef()

  const projects = [
    {
      title: 'Matrix Icons',
      description: 'Impeccably designed and handcrafted icons, showcasing craftsmanship.',
      imageSrc: '/icon.jpg',
      link: 'https://github.com/jatinder-singh221/matrix-icons-react'
    },
    {
      title: 'Tailcode',
      description: 'Revolutionize your coding with our online editor – where components and templates unite for faster, more collaborative development.',
      imageSrc: '/code.jpg',
      link: 'https://github.com/jatinder-singh221/TailCode'
    },
    {
      title: 'Youtube clone',
      description: '"Experience video-sharing reimagined with our YouTube Clone. Watch, upload, and engage in a world of diverse content and community interaction."',
      imageSrc: '/you.jpg',
      link: 'https://github.com/jatinder-singh221/youtube'
    },
  ];

  const handleMenu = () => {
    const computedStyles = window.getComputedStyle(ref.current);
    const displayValue = computedStyles.getPropertyValue('display');
    if (displayValue === 'none'){
      ref.current.classList.remove('hidden')
      ref.current.classList.add('flex')
    }
    else {
      ref.current.classList.remove('flex')
      ref.current.classList.add('hidden')
    }
  }

  return (
    <>
      <Head>
        <title>Jatinder Singh | Full Stack Developer Portfolio</title>
        <meta name="description" content="Welcome to my digital space! I'm Jatinder Singh, a passionate Full Stack Developer specializing in crafting seamless web and mobile experiences. With expertise in React.js, Next.js, Django, and Python, I'm dedicated to pushing the boundaries of innovation. Explore my projects and journey through a world of code and creativity." />
      </Head>
      <div className="min-h-screen bg-hero bg-cover w-full bg-no-repeat relative" id='Home'>
        <nav className='flex justify-between w-[80%] mx-auto h-[90px] items-center'>
          <Image src={LOGO} width={50} height={50} alt='logo' />
          <svg xmlns="http://www.w3.org/2000/svg" onClick={handleMenu} width="24" height="24" fill="none" viewBox="0 0 24 24" className='lg:hidden cursor-pointer'>
            <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 4h17M4 12h17M4 20h17" />
          </svg>
          <ul ref={ref} className='fixed lg:relative top-16 lg:top-0 hidden lg:flex items-center flex-col lg:flex-row right-10 
          space-y-5 lg:space-x-7 lg:space-y-0 bg-white lg:bg-transparent py-5 lg:py-0 shadow-lg lg:shadow-none z-50 w-[60%] lg:w-auto rounded'>
            <li className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" stroke-width="1.5" d="M12 13v5.5M2 10.385a7 7 0 0 1 4.067-6.356l3-1.385a7 7 0 0 1 5.866 0l3 1.385A7 7 0 0 1 22 10.385v3.905a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7v-3.905Z" />
              </svg>
              <Link href='#Home'>
                Home
              </Link>
            </li>
            <li className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m-15 0c.235-.083.487-.128.75-.128h13.5c.256 0 .51.043.75.128m-15 0A2.25 2.25 0 0 0 3 12v6a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18v-6a2.25 2.25 0 0 0-1.5-2.122" />
              </svg>
              <Link href='#Project'>
                Projects
              </Link>
            </li>
            <li className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 1 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 1 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              <Link href='#Contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className='w-full h-[calc(100vh-90px)] flex items-center justify-center flex-col space-y-10'>
          <div className='relative'>
            <Image src='/avtar.png' height={220} width={200} alt='avatar' />
            <Image src='/bulb.png' height={50} width={50} alt='avatar' className='absolute -top-10 -right-10' />
            <Image src='/chart.png' height={50} width={50} alt='avatar' className='absolute -bottom-10 -left-20' />
            <Image src='/circle.png' height={50} width={50} alt='avatar' className='absolute -top-10 -left-10' />
            <Image src='/comp.png' height={50} width={50} alt='avatar' className='absolute -bottom-10 -right-20' />
          </div>
          <p className='font-bold text-2xl'>{`Hello, I'm Jatinder Singh`}</p>
          <p className='w-[80%] text-center leading-8'> A passionate and versatile Full Stack Developer with expertise in a variety of technologies. With a keen focus on user-centric design and seamless functionality, I create digital experiences that leave a lasting impression.</p>
          <Link href='#Project' className='block bg-[#6C5DE5] text-[16px] text-white px-10 py-3 rounded'>My Projects</Link>
        </div>
      </div>
      <div id='Project' className='py-10 w-[90%] mx-auto min-h-screen space-y-5'>
        <h1 className='text-center text-3xl font-bold'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          {projects.map((data, index) => {
            return <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
              <div className='relative w-full min-h-[200px]'>
                <Image layout='fill' className="aspect-video" src={data.imageSrc} alt={data.title} />
              </div>
              <div className="px-6 py-4">
                <div className='flex  items-center justify-between'>
                  <div className="font-bold text-xl mb-2">{data.title}</div>
                  <Link href={data.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.75 18.157v3.87h-7v-1.75h-1.5c-.118 0-.205.004-.305.01l-.166.007a3.628 3.628 0 0 1-.622-.023c-.68-.085-1.165-.201-1.81-.611-.492-.314-.762-.648-1.018-.964l-.153-.187a3.77 3.77 0 0 1-.516-.85 9.268 9.268 0 0 0-.045-.093c-.107-.218-.182-.336-.325-.447a2.547 2.547 0 0 0-.472-.257 5.565 5.565 0 0 0-.299-.121l-.016-.006-.003-.001A.75.75 0 0 1 3 15.32l-.25.707.25-.707h.002l.003.001.007.003.027.01a6.537 6.537 0 0 1 .385.156c.217.096.538.251.787.445.412.32.61.684.752.972l.061.128c.105.218.172.356.3.51l.208.25c.237.29.347.425.62.599.398.253.646.32 1.191.389.14.017.249.018.376.012.031 0 .068-.003.109-.005.115-.005.264-.013.422-.013h1.5v-.62a3.37 3.37 0 0 1 .94-2.58c-3.14-.39-6.44-1.58-6.44-7a5.44 5.44 0 0 1 1.5-3.78 5.07 5.07 0 0 1 .09-3.77s1.18-.35 3.91 1.48a13.38 13.38 0 0 1 7 0c2.73-1.83 3.91-1.48 3.91-1.48a5.07 5.07 0 0 1 .09 3.77 5.44 5.44 0 0 1 1.5 3.75c0 5.46-3.3 6.65-6.44 7a3.37 3.37 0 0 1 .94 2.61Z" />
                    </svg>
                  </Link>
                </div>
                <p className="text-gray-700 text-base">{data.description}</p>
              </div>
            </div>
          })}
        </div>
        <Link href='#Contact' className='ml-[50%] translate-x-[-50%] whitespace-nowrap inline-block bg-[#6C5DE5] text-[16px] text-white px-10 py-3 rounded'>Contact me</Link>
      </div>
      <div id='Contact' className='space-y-8 pb-12'>
        <h1 className='text-center text-3xl font-bold '>Contact Info</h1>
        <div className='flex items-center justify-center space-x-5'>
          <Link href='https://github.com/jatinder-singh221'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6C5DE5" viewBox="0 0 24 24">
              <path d="M16.75 18.157v3.87h-7v-1.75h-1.5c-.118 0-.205.004-.305.01l-.166.007a3.628 3.628 0 0 1-.622-.023c-.68-.085-1.165-.201-1.81-.611-.492-.314-.762-.648-1.018-.964l-.153-.187a3.77 3.77 0 0 1-.516-.85 9.268 9.268 0 0 0-.045-.093c-.107-.218-.182-.336-.325-.447a2.547 2.547 0 0 0-.472-.257 5.565 5.565 0 0 0-.299-.121l-.016-.006-.003-.001A.75.75 0 0 1 3 15.32l-.25.707.25-.707h.002l.003.001.007.003.027.01a6.537 6.537 0 0 1 .385.156c.217.096.538.251.787.445.412.32.61.684.752.972l.061.128c.105.218.172.356.3.51l.208.25c.237.29.347.425.62.599.398.253.646.32 1.191.389.14.017.249.018.376.012.031 0 .068-.003.109-.005.115-.005.264-.013.422-.013h1.5v-.62a3.37 3.37 0 0 1 .94-2.58c-3.14-.39-6.44-1.58-6.44-7a5.44 5.44 0 0 1 1.5-3.78 5.07 5.07 0 0 1 .09-3.77s1.18-.35 3.91 1.48a13.38 13.38 0 0 1 7 0c2.73-1.83 3.91-1.48 3.91-1.48a5.07 5.07 0 0 1 .09 3.77 5.44 5.44 0 0 1 1.5 3.75c0 5.46-3.3 6.65-6.44 7a3.37 3.37 0 0 1 .94 2.61Z" />
            </svg>
          </Link>
          <Link href='https://www.instagram.com/jatinder__singh19/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6C5DE5" viewBox="0 0 24 24">
              <path d="M12.52 8.742a3.25 3.25 0 1 0-.954 6.429 3.25 3.25 0 0 0 .954-6.43Z" />
              <path fill-rule="evenodd" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5ZM9.856 7.74a4.75 4.75 0 1 1 4.375 8.433 4.75 4.75 0 0 1-4.375-8.432ZM17.5 5.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z" clip-rule="evenodd" />
            </svg>
          </Link>
          <Link href='mailto:jatindersing19@gmail.com'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6C5DE5" viewBox="0 0 24 24">
              <path d="M2 6.06V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.06a.751.751 0 0 1-.1.074L12 12.387 2.1 6.134A.755.755 0 0 1 2 6.06Z" />
              <path d="M20.887 5H3.113L12 10.613 20.887 5Z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

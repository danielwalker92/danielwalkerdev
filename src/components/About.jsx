
  const stats = [
    { name: 'Experience in IT', value: '12 Years' },
    { name: 'Motto', value: 'Lifelong Learner' },
    { name: '', value: '' },
  ]
  
  export default function About() {
    return (
    <div id="about" className="bg-gradient-to-br from-green-700 to-blue-400 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">A lifelong learner with ambitious curiosity</h2>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              I've spent my time as a Full-Stack Engineer learning new technologies and strategies for creating modern web applications. I've listed a few of my favorite technologies here.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="https://www.linkedin.com/in/daniel-r-walker/"
                target="_blank"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                Connect on LinkedIn
              </a>
              <a href="#contact" className="text-sm font-semibold text-white">
                Contact me <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-sm grid-cols-2 items-center gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-lg lg:pl-8">
            <img
              className="max-h-12 w-full object-contain object-left"
              src="src\assets\reactjs.svg"
              alt="React"
            />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="src\assets\expressjs.svg"
                alt="Express"
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="src\assets\nodejs.svg"
                alt="Node"
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="src\assets\tailwindcss.svg"
                alt="TailwindCSS"
              />
            <img
              className="max-h-12 w-full object-contain object-left"
              src="src\assets\mongodb.svg"
              alt="MongoDB"
            />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="src\assets\mariadb.svg"
                alt="MariaDB"
              />
          </div>
        </div>
      </div>
    </div>
  )
  }
  
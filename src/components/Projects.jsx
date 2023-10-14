const sites = [
  {
    name: 'viedash',
    role: 'Productivity is great, until it becomes unproductive. viedash is meant to help simplify your daily data into manageble, consumable metrics.',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    githubUrl: '#',
    websiteUrl: '#',
  },
  {
    name: 'other-app',
    role: 'Productivity is great, until it becomes unproductive. viedash is meant to help simplify your daily data into manageble, consumable metrics.',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    githubUrl: '#',
    websiteUrl: '#',
  },
  // More sites...
  ]
  
  export default function Projects() {
    return (
      <div id="projects" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Work</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {sites.map((site) => (
              <li key={site.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={site.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{site.name}</h3>
                <p className="text-base leading-7 text-gray-600">{site.role}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={site.githubUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Github</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={site.websiteUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Website</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M17 24h-10v-1c1.533-.366 2.386-1.572 2.497-3h5.006c.111 1.427.964 2.634 2.497 3v1zm6-5c.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-17c0-.265-.105-.52-.293-.707-.187-.188-.442-.293-.707-.293h-22c-.265 0-.52.105-.707.293-.188.187-.293.442-.293.707v17c0 .265.105.52.293.707.187.188.442.293.707.293h22zm-11-3.419c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm10-13.581h-20v12h20v-12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
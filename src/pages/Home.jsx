import { Icon } from "~/Icons"

function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-4 gap-y-4">
      <Icon name="yoda" size={400} />
      <div className="text-xl font-bold text-center">
        FRONT-END PRACTICUM - FINAL CASE
        <br/>
        <hr />
        Interface prepared with <a href="https://swapi.dev/" target="_blank" className="text-yellow-300">SWAPI</a>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <span>Technologies</span>
        <div className="flex justify-center items-center gap-x-4 flex-wrap">
          <a href="https://vitejs.dev/" target="_blank" title="Vite">
            <Icon name="vite" size={36} />
          </a>
          <a href="https://react.dev/" target="_blank" title="React">
            <Icon name="react" size={36} />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" title="Tailwind CSS">
            <Icon name="tailwindcss" size={36} />
          </a>
          <a href="https://redux-toolkit.js.org/" target="_blank" title="Redux Toolkit">
            <Icon name="reduxToolkit" size={36} />
          </a>
          <a href="https://axios-http.com/" target="_blank" title="Axios">
            <Icon name="axios" size={36} />
          </a>
          <a href="https://reactrouter.com/" target="_blank" title="React Router">
            <Icon name="routerDom" size={36} />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <span>Links</span>
        <div className="flex justify-center items-center gap-x-4">
          <a href="https://www.patika.dev/bootcamp/fmss-bilisim-front-end-practicum" target="_blank" title="Patika">
            <Icon name="patika" size={36} />
          </a>
          <a href="https://github.com/Gurkankaradag0/Front-end-Practicum-Final-Case" target="_blank" title="Github">
            <Icon name="github" size={36} />
          </a>
          <a href="https://www.linkedin.com/in/gurkankaradag/" target="_blank" title="LinkedIn">
            <Icon name="linkedin" size={42} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
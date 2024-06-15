

const Hero = () => {
  return (
    <div className="container mx-auto mt-4 pt-16 pb-16 bg-[--dark1] rounded">
        <h1 className="text-[--light] text-5xl w-[80%] mx-auto text-center mb-4">
        Supercharge Your Projects: Quality <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-400 font-bold">Components</span> for Every Stack
        </h1>
        <p className="text-lg font-light text-[--light] text-center mb-4">Handpicked React, Sass, TailwindCSS, CSS, HTML, JavaScript, and more for seamless integration.</p>

        <div className="flex items-start w-fit mx-auto mt-20">
        <div className="flex flex-col">
        <input className="px-4 py-2 outline-none rounded" type="text" placeholder="Horizontal Timeline..." />
        <p className="mt-3 text-[--light]">Example:- Timelines , Caurosel , Roadmap , horzontal scroling </p>
        </div>
        <button className="rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 ml-5 text-white">Search</button>
        </div>
    </div>
  )
}

export default Hero
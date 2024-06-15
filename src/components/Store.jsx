

const Store = () => {
  return (
    <section className="w-full pt-5">
        <h1 className="text-center my-10 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-400">React components</h1>

        <div className="container rounded-[1rem] mx-auto h-64 mb-5 p-4 bg-[--dark2] flex justify-between">
            <img className="rounded-[1rem]" src="https://images.unsplash.com/photo-1426024120108-99cc76989c71?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
            <div className="flex flex-col flex-1 ml-5">
                <h2 className="text-xl font-semibold text-[--white] mb-4">Horizontal Timeline</h2>
                <ul>
                    <li className="text-lg mb-2 list-disc ml-5 text-[--light]">uilt with Bootstrap 5.3.2 and React 17 & 18</li>
                    <li className="text-lg mb-2 list-disc ml-5 text-[--light]">Component and Layout with React Hook</li>
                    <li className="text-lg mb-2 list-disc ml-5 text-[--light]">Easy customizable Multipurpose React Template</li>
                </ul>
            </div>

            <div className="w-60 h-full border-l-2 border-gray-400">
                
            </div>
        </div>

        <div className="container mx-auto h-64 mb-5 p-4 bg-[--dark2] flex">
            <img  src="https://images.unsplash.com/photo-1426024120108-99cc76989c71?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" />
        </div>

        <footer>
            <h1>Usefull links</h1>
            <a href="/ContactUs">Contact Us</a>
            <a href="/PrivacyPolicy">Privacy Policy</a>
            <a href="/TermsConditions">Terms & Conditions</a>
            <a href="/AboutUs">About Us</a>
            <a href="/Refund Policies">Cancellation/Refund Policies</a>
        </footer>
    </section>
  )
}

export default Store
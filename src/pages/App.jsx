import Content from "../components/Content";
import Form from "../components/Form";

const App = () => {
    return (
      <>
        <main
          className={`relative font-poppins bg-[url(https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg)] bg-center bg-cover bg-no-repeat object-cover min-w-screen min-h-screen`}
        >
          {/* overlay */}
          <div className='absolute bg-black/30 flex justify-center items-center min-h-full min-w-full py-4 px-8'>
            {/* content is here */}
            <section className='flex flex-col md:flex-row gap-y-5 items-center md:gap-x-5 lg:h-full'>
                <Content />
                <Form />
            </section>
          </div>
        </main>
      </>
    );
}
 
export default App;

const Content = () => {
    return (
        <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-white w-full md:max-w-[50dvw]">
            <h1 className="text-center md:text-start text-[clamp(1.5rem,2dvw,2rem)] font-extrabold">Learn to code by watching others</h1>
            <p className="text-center md:text-start text-[clamp(0.8rem,1dvw,2rem)] md:text-base ">
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
            </p>
        </div>
    );
}
 
export default Content;
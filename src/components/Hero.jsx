const HeroSection = () => {
  return (
    <main>
      <div className="hero container flex items-center justify-between p-2 bg-white shadow-md max-w-screen-xl mx-auto px-9 ">
        <div className="hero-content">
          <h1 className="text-8xl font-semibold">YOUR FEET DESERVE BEST</h1>
          <p className="text-1xl leading-7 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, earum. Excepturi reiciendis possimus provident
            recusandae dolor, ullam consequatur quis perferendis commodi
            corrupti est at numquam natus, culpa non odit quo necessitatibus
            officia sed unde?
          </p>
          <div className="hero-btn gap-4 flex my-4">
            <button className="py-2 px-6 bg-red-600 text-2xl text-white">
              Shop now
            </button>
            <button className="py-2 px-6 bg-red-600 text-2xl text-white">
              Categaroy
            </button>
          </div>
          <div className="shopping">
            <p>Available on</p>
            <div className="shopping-icons flex gap-2">
              <img
                src="/images/icon1.png"
                className="w-14 h-14 "
                alt="Amazon"
              />
              <img
                src="/images/icon2.png"
                className="w-12 h-12 mt-1"
                alt="flipkart"
              />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoes.png" alt="Shoes" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

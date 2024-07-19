const App = () => {
  return (
    <>
      <div className="bg-custom-yellow flex h-screen w-full items-center justify-center">
        <section className="bg-custom-white shadow-3xl border-custom-black w-5/6 max-w-80 rounded-2xl border p-5">
          <img
            className="mb-5"
            src="/images/illustration-article.svg"
            alt="illustration-article"
          />
          <h3 className="bg-custom-yellow mb-3 inline-block rounded-md px-5 py-2 font-bold">
            Learning
          </h3>
          <p className="mb-5 text-sm">Published 21 Dec 2023</p>
          <h2 className="hover:text-custom-yellow mb-5 text-xl font-extrabold hover:cursor-pointer">
            HTML & CSS foundations
          </h2>
          <p className="text-custom-grey mb-5">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex items-center gap-5">
            <img
              className="h-10 w-10"
              src="/images/image-avatar.webp"
              alt="image-avatar"
            />
            <p className="font-bold">Greg Hooper</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default App;

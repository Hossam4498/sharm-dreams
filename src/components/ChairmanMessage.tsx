const ChairmanMessage = () => {
  return (
    <section
      className="relative bg-white py-24 px-4 text-blue-950 overflow-hidden"
    >
      <div className="section-container flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10 backdrop-blur-md border border-blue-950 rounded-2xl shadow-lg">
        {/* Image Section */}
        <div className="flex-shrink-0 w-62 h-62 lg:w-100 lg:h-100 rounded-full overflow-hidden shadow-lg border-4 border-blue-950 bg-blue-950">
          <img
            src="/Dr.Hamada.png"
            alt="Chairman Dr. Hamada Abou Elenin"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Box */}
        <div className="p-8 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Chairman’s Message</h2>
          <p className="mb-4">
            It is with great pleasure that I welcome you to the Sharm Dreams Group corporate website.
            As the Chairman of this esteemed organization, I am proud to lead a team of individuals
            dedicated to delivering unparalleled tourism and hospitality experiences.
          </p>
          <p className="mb-4">
            For over 25 years, SDG has been at the forefront of the industry, constantly evolving to
            meet the changing needs and desires of our discerning guests. We have built a reputation
            for excellence, innovation, and a steadfast commitment to exceeding expectations.
          </p>
          <p className="mb-6">
            On behalf of the entire Sharm Dreams Group (SDG), I invite you – whether you are an investor
            or a guest – to explore our corporate website. There, you will find our set of hotels, along
            with their services and facilities, as well as our group of companies. Let us be your gateway
            to extraordinary experiences.
          </p>
          <p className="mt-4 font-bold italic">Yours Faithfully,<br />Dr. Hamada Abou Elenin</p>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;

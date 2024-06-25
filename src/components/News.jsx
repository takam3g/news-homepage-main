const newsItems = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
    link: "#",
  },
  {
    title: "The Downsides of AI Artistry",
    description: "What are the possible adverse effects of on-demand AI image generation?",
    link: "#",
  },
  {
    title: "Is VC Funding Drying Up?",
    description: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    link: "#",
  },
];

const News = () => {
  return (
    <div className="bg-secondary-veryDarkBlue p-5 pb-0 my-16 md:my-0 md:pb-5">
      <h2 className="font-bold text-3xl text-primary-orange">New</h2>
      <div className="h-full grid grid-auto-rows">
        {
          newsItems.map((item, index) => (
            <a href={item.link} key={item.title} className={`py-8 ${index !== newsItems.length-1 && "border-b-2"} border-secondary-grayishBlue`}>
              <h3 className="text-secondary-offWhite font-bold text-xl hover:text-primary-orange mb-4">{item.title}</h3>
              <p className="text-secondary-grayishBlue text-sm">{item.description}</p>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default News
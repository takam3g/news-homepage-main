import RetroPCImg from '../assets/img/image-retro-pcs.jpg';
import TopLaptopsImg from '../assets/img/image-top-laptops.jpg';
import GamingImg from '../assets/img/image-gaming-growth.jpg';

const articles = [
  {
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    img: RetroPCImg,
    link: "#",
  },
  {
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    img: TopLaptopsImg,
    link: "#",
  },
  {
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    img: GamingImg,
    link: "#",
  },
];

const Articles = () => {
  return (
    <div className="md:grid grid-cols-3 gap-x-5 my-16">
      {
        articles.map((article, index) => (
          <a href={article.link} key={article.title} className="grid grid-cols-3 gap-5 my-5 group">
            <img src={article.img} alt={article.title} className="col-span-1 h-full"/>
            <div className="col-span-2 flex flex-col justify-between">
              <h3 className="text-primary-red font-bold text-3xl">{`0${index+1}` }</h3>
              <h4 className="font-bold text-lg text-secondary-veryDarkBlue group-hover:text-primary-red">{article.title}</h4>
              <p className="text-sm text-secondary-darkGrayishBlue">{article.description}</p>
            </div>
          </a>
        ))
      }
    </div>
  )
}

export default Articles
import GenreCard from "../../components/GenreCard";
import { genresData } from "../../data/HomeData";

const Genres = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex justify-between gap-2">
        {genresData.map(item => <GenreCard {...item} key={item.title} />)}
      </div>
    </section>
  );
};

export default Genres;

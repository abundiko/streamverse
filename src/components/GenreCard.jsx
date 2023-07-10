// eslint-disable-next-line react/prop-types
const GenreCard = ({ title, img, stagger }) => {
  return (
    <div
      style={{
        top: `${stagger}px`
      }}
      className="genre-card w-[11%] h-[50vh] relative shadow-md bg-black hover:w-[20%] group "
    >
      <img
        src={`/assets/images/${img}`}
        alt="loading..."
        className="h-full w-full absolute top-0 left-0 object-cover opacity-40 group-hover:opacity-80"
      />
      <div className="relative h-full w-full flex items-center justify-center text-center text-text-light hover:items-end p-5">
        <strong>
          {title}
        </strong>
      </div>
    </div>
  );
};

export default GenreCard;

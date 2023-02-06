import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((info) => {
          return <Tour key={tours.id} {...info} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

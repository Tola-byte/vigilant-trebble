import { Container } from "../skeleton/container";

export const ProductBanner = () => {
  return (
    <div className="h-[50vh] flex justify-center items-center flex-col">
      <Container>
        <div className="md:w-[60%] text-center mx-auto">
          <h1 className="text-primary font-semibold text-2xl md:text-5xl mb-4">
            eFresh
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Buying fresh fish in bulk is easier with eFresh! eFishery ensures
            that the fish it sells are the highest quality fish harvested from
            Indonesian cultivators. Fulfilling fish supply more easily and
            cheaply with eFresh!
          </p>
        </div>
      </Container>
    </div>
  );
};

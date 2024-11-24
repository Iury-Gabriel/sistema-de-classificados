import { getCars } from "@/actions/get-cars";
import { CarItem } from "@/components/car-item";
import { Header } from "@/components/header";

export default async function Page() {
  const cars = await getCars();

  return (
    <div>
      <Header />

      <section className="grid sm:grid-cols-2 md:grid-cols-4 mx-3 gap-5">
        {cars.map(carItem => (
          <CarItem data={carItem} key={carItem.id} />
        ))}
      </section>
    </div>
  );
}
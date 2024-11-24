import Link from "next/link"

type Props = {
    data: {
        id: number;
        title: string;
        img: string;
        priceFrom: number;
        priceTo: number | null;
    }
}
export const CarItem = ({ data }: Props) => {
    return (
        <Link href={`/car/${data.id}`}>
            <img src={`/uploads/${data.img}`} className="w-full rounded" />
            <p className="text-lg mt-2 font-bold">{data.title}</p>
            <p className="text-gray-700 mt-3">De <span className="mt-2 line-through">R$ {data.priceFrom.toFixed(2)}</span> por:</p>
            <p className="text-green-700 font-bold mt-2 text-2xl">
                {data.priceTo !== null 
                    ? `R$ ${data.priceTo.toFixed(2)}`
                    : "Preço não disponível"}
            </p>
        </Link>
    );
};

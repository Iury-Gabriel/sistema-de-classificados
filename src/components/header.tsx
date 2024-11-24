import Link from "next/link";
import { Button } from "./button";

export const Header = () => {
    return (
        <header className="flex justify-between items-center py-10 mx-3">
            <div className="text-3xl font-bold">B7Carros</div>
            <div>
                <Link href={'/add'}>
                    <Button label='Cadastrar Carro' />
                </Link>
            </div>
        </header>
    );
}; 
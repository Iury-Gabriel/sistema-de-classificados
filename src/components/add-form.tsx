"use client"

import { createCar } from "@/actions/create-car";
import { Button } from "./button";

export const AddForm = () => {
    return (
        <form action={createCar}>
            <label className="block border border-gray-500 p-4 mb-3">
                <input type="file" name="img" id="" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3">
                <input type="text" name="title" id="" placeholder="Digite o titulo do carro" className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3">
                <input type="number" name="price_from" id="" placeholder="Digite o preço antigo do carro" className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3">
                <input type="number" name="price_to" id="" placeholder="Digite o preço novo do carro" className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3">
                <input type="checkbox" name="negotiable" id="" />
                Negociável?
            </label>
            <label className="block border border-gray-500 p-4 mb-3">
                <input type="text" name="author_name" id="" placeholder="Digite o nome do anunciante" className="bg-black text-white text-lg w-full outline-none" />
            </label>
            <label className="block border border-gray-500 p-4 mb-3">
                <input type="email" name="author_email" id="" placeholder="Digite o email do anunciante" className="bg-black text-white text-lg w-full outline-none" />            
            </label>
            <label className="block border border-gray-500 p-4 mb-3">
                <textarea name="description" id="" rows={4} className="resize-none bg-black text-white text-lg w-full outline-none"></textarea>
            </label>

            <Button label="Cadastrar" />
        </form>
    );
};
import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

interface CreateProductProps {
    onCreate: (response: IProduct) => void
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
    const productData = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    const [error, setError] = useState('')
    const [value, setValue] = useState('')
    const submitHandler = async (event: React.FormEvent) => {
        setError('')
        event.preventDefault()
        if (value.trim().length === 0) {
            setError('Please, enter valid title')
            return
        }
        productData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                placeholder="Enter product title..."
                className="border py-2 px-4 mb-2 w-full outline-none"
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error} />}
            <button type="submit" className="border py-2 px-4 bg-pink-200 hover:bg-pink-500">Create</button>
        </form>
    )
}
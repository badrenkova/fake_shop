import { useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
export const ProductsPage = () => {

    const { products, error, loading, addProduct } = useProducts()
    const { modal, open, close } = useContext(ModalContext)
    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}

            {products.map(product => <Product product={product} key={product.id} />)}
            {modal && <Modal onClose={close} title='Create New Product'>
                <CreateProduct onCreate={createHandler} />
            </Modal>}
            <button
                className='fixed rounded-full bottom-5 right-5 bg-pink-200 py-2 px-4 hover:bg-pink-500 text-2xl'
                onClick={open}

            >+</button>
        </div>
    );
}